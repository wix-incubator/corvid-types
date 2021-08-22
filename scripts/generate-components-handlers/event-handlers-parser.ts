import * as ts from "typescript";
import { ComponentsEventHandlers, EventHandler } from "../types";
import Constants from "../constants";

const EVENT_TYPE_JS_DOC_TAG_NAME = "eventType";

interface ComponentsEventHandlersCache {
  [name: string]: EventHandler[];
}

type CompletedComponentsFlags = {
  [name: string]: boolean;
};

type EventHandlersParser = {
  parse: () => ComponentsEventHandlers;
};

const getEventHandlersParser = (
  typeChecker: ts.TypeChecker,
  sourceFile: ts.SourceFile
): EventHandlersParser => {
  const handlersCache: ComponentsEventHandlersCache = {};
  const completed: CompletedComponentsFlags = {};
  let eventHandlersModuleBody: ts.ModuleBlock;

  const buildEventHandler = (
    interfaceName: string,
    member: ts.MethodSignature
  ): EventHandler => {
    const symbol = typeChecker.getSymbolAtLocation(member.name);
    const type = symbol?.getJsDocTags()?.[0]?.text;
    if (!type) {
      throw new Error(
        `The member must have a @eventtype JSDoc tag: ${member.name.getText()}`
      );
    }

    return {
      origin: interfaceName,
      name: member.name.getText(),
      description: ts.displayPartsToString(
        symbol?.getDocumentationComment(typeChecker)
      ),
      kind: "function",
      type: ts.displayPartsToString(type),
      handlerArgs: member.parameters.map(parameter => ({
        name: parameter.name.getText(),
        type: parameter.type?.getText()
      }))
    };
  };

  const isMemberEventHandler = (member: ts.MethodSignature): boolean => {
    const docTags = typeChecker
      .getSymbolAtLocation(member.name)
      ?.getJsDocTags();
    return (
      docTags != null &&
      docTags.some(tag => tag.name === EVENT_TYPE_JS_DOC_TAG_NAME)
    );
  };

  const getBaseClassesNames = (node: ts.InterfaceDeclaration): string[] => {
    if (node.heritageClauses == null) {
      return [];
    }

    return node.heritageClauses
      .map(clause => clause.types)
      .reduce<ts.ExpressionWithTypeArguments[]>(
        (res, types) => [...res, ...types],
        []
      )
      .map(type => type.expression)
      .filter((expression): expression is ts.PropertyAccessExpression =>
        ts.isPropertyAccessExpression(expression)
      )
      .map(expression => expression.name.getText());
  };

  const getStatementByInterfaceName = (
    interfaceName: string
  ): ts.InterfaceDeclaration | undefined => {
    return eventHandlersModuleBody.statements.find(
      (statement): statement is ts.InterfaceDeclaration => {
        return (
          ts.isInterfaceDeclaration(statement) &&
          statement.name.getText() === interfaceName
        );
      }
    );
  };

  const overrideOriginWithRootInterface = (e: EventHandler, origin: string) => {
    return {
      ...e,
      origin
    };
  };

  const mergeEventHandlers = (
    soFar: EventHandler[],
    toMerge: EventHandler[]
  ) => {
    return [...soFar, ...toMerge];
  };

  const getRootEventHandlers = (
    rootInterfaceName: string,
    interfaceNode: ts.InterfaceDeclaration
  ): EventHandler[] => {
    return interfaceNode.members
      .filter((member): member is ts.MethodSignature =>
        isMemberEventHandler(member as ts.MethodSignature)
      )
      .map(member => buildEventHandler(rootInterfaceName, member));
  };

  const getBaseClassesEventHandlers = (
    rootInterfaceName: string,
    interfaceNode: ts.InterfaceDeclaration
  ): EventHandler[] => {
    const baseClassesNodes = getBaseClassesNames(interfaceNode)
      .map(baseClassName => getStatementByInterfaceName(baseClassName))
      .filter((statement): statement is ts.InterfaceDeclaration =>
        Boolean(statement)
      );

    return baseClassesNodes
      .map(baseClassNode => getEventHandlers(rootInterfaceName, baseClassNode))
      .reduce<EventHandler[]>(mergeEventHandlers, []);
  };

  const getEventHandlers = (
    rootInterfaceName: string,
    interfaceNode: ts.InterfaceDeclaration
  ): EventHandler[] => {
    const interfaceName = interfaceNode.name.getText();
    if (completed[interfaceName]) {
      return handlersCache[interfaceName];
    }

    const rootMembers = getRootEventHandlers(rootInterfaceName, interfaceNode);
    const baseHandlers = getBaseClassesEventHandlers(
      rootInterfaceName,
      interfaceNode
    );

    const componentHandlers = mergeEventHandlers(
      rootMembers,
      baseHandlers
    ).map(e => overrideOriginWithRootInterface(e, rootInterfaceName));

    handlersCache[interfaceName] = componentHandlers;
    completed[interfaceName] = true;
    return componentHandlers;
  };

  const getEventHandlersModuleBody = (
    sourceFile: ts.SourceFile
  ): ts.ModuleBlock => {
    const eventHandlersModule = sourceFile.statements.find(
      (statement): statement is ts.ModuleDeclaration => {
        return (
          ts.isModuleDeclaration(statement) &&
          statement.name.text === Constants.EVENTS_INTERFACE_NAME
        );
      }
    );

    if (
      !eventHandlersModule ||
      !eventHandlersModule?.body ||
      !ts.isModuleBlock(eventHandlersModule?.body)
    ) {
      throw new Error(
        `Failed finding the ${Constants.EVENTS_INTERFACE_NAME} interface`
      );
    }
    return eventHandlersModule.body;
  };

  const generateComponentsMapEventHandlers = (): ComponentsEventHandlers => {
    eventHandlersModuleBody = getEventHandlersModuleBody(sourceFile);
    const interfaces = eventHandlersModuleBody.statements.filter(
      (statement): statement is ts.InterfaceDeclaration => {
        return ts.isInterfaceDeclaration(statement);
      }
    );

    return interfaces.reduce((componentsMap, interfaceNode) => {
      const interfaceNodeName = interfaceNode.name.getText();
      return Object.assign(componentsMap, {
        [interfaceNodeName]: getEventHandlers(interfaceNodeName, interfaceNode)
      });
    }, {});
  };

  return {
    parse: generateComponentsMapEventHandlers
  };
};

export default getEventHandlersParser;
