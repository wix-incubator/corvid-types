import * as ts from "typescript";

const EVENT_TYPE_JS_DOC_TAG_NAME = "eventType";

type ComponentsMap = {
  [name: string]: EventHandler[];
};

export type ComponentEventMethods = EventHandler[];

export interface EventHandler {
  origin: string;
  name: string;
  description: string;
  kind: "function";
  type: string;
  handlerArgs: HandlerArg[];
}

interface HandlerArg {
  name: string;
  type: string | undefined;
}

interface ComponentsEventsCache {
  [name: string]: ComponentEventMethods;
}

type CompletedComponentsFlags = {
  [name: string]: boolean;
};

type EventHandlersGenerator = {
  generate: () => ComponentsMap;
};

const getEventHandlersGenerator = (
  typeChecker: ts.TypeChecker,
  eventHandlersModuleBody: ts.ModuleBlock
): EventHandlersGenerator => {
  const handlersCache: ComponentsEventsCache = {};
  const completed: CompletedComponentsFlags = {};

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
  ): ComponentEventMethods => {
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

  const generateComponentsMapEventHandlers = (): ComponentsMap => {
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
    generate: generateComponentsMapEventHandlers
  };
};

export default getEventHandlersGenerator;
