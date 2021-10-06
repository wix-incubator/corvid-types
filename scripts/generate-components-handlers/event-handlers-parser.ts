import * as ts from "typescript";
import Constants from "../constants";
import {
  getBaseClassesNames,
  getMethodParameterTypeDeclaration,
  getStatementByInterfaceName,
  isFunctionTypeNodeWithParameters
} from "./utils";

const EVENT_TYPE_JS_DOC_TAG_NAME = "eventType";

export type ComponentsEventHandlers = {
  [name: string]: EventHandler[];
};

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
  // imo you can use only the handlersCache and ask _.has insted of completed[COMP_TYPE]
  const handlersCache: ComponentsEventHandlersCache = {};
  const completed: CompletedComponentsFlags = {};
  let eventHandlersModuleBody: ts.ModuleBlock;

  const getHandlerArguments = (
    methodSignature: ts.MethodSignature
  ): HandlerArg[] => {
    const parameterTypeDeclaration = getMethodParameterTypeDeclaration(
      eventHandlersModuleBody,
      methodSignature
    );
    if (
      parameterTypeDeclaration == null ||
      !isFunctionTypeNodeWithParameters(parameterTypeDeclaration.type)
    ) {
      return [];
    }

    const eventHandlerParameter = parameterTypeDeclaration.type.parameters[0];
    return [
      {
        name: eventHandlerParameter.name.getText(),
        type: eventHandlerParameter.type?.getText()
      }
    ];
  };

  const buildEventHandler = (
    interfaceName: string,
    methodSignature: ts.MethodSignature
  ): EventHandler => {
    const symbol = typeChecker.getSymbolAtLocation(methodSignature.name);
    const type = symbol?.getJsDocTags()?.[0]?.text;
    if (!type) {
      throw new Error(
        `The member must have a @eventtype JSDoc tag: ${methodSignature.name.getText()}`
      );
    }

    return {
      origin: interfaceName,
      name: methodSignature.name.getText(),
      description: ts.displayPartsToString(
        symbol?.getDocumentationComment(typeChecker)
      ),
      kind: "function",
      type: ts.displayPartsToString(type),
      handlerArgs: getHandlerArguments(methodSignature)
    };
  };

  const isMethodEventHandler = (member: ts.MethodSignature): boolean => {
    const docTags = typeChecker
      .getSymbolAtLocation(member.name)
      ?.getJsDocTags();
    return (
      docTags != null &&
      docTags.some(tag => tag.name === EVENT_TYPE_JS_DOC_TAG_NAME)
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
        isMethodEventHandler(member as ts.MethodSignature)
      )
      .map(member => buildEventHandler(rootInterfaceName, member));
  };

  const getBaseClassesEventHandlers = (
    rootInterfaceName: string,
    interfaceNode: ts.InterfaceDeclaration
  ): EventHandler[] => {
    const baseClassesNodes = getBaseClassesNames(interfaceNode)
      .map(baseClassName =>
        getStatementByInterfaceName(eventHandlersModuleBody, baseClassName)
      )
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

    // can you brifly explain this logic?
    const componentHandlers = mergeEventHandlers(
      rootMembers,
      baseHandlers
    ).map(e => overrideOriginWithRootInterface(e, rootInterfaceName));

    handlersCache[interfaceName] = componentHandlers;
    completed[interfaceName] = true;
    return componentHandlers;
  };
// i think get$wComponentModuleBody is a better name for this function
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

    // i would extract this logic to a function that better explains what do we check here
    if (
      !eventHandlersModule ||
      !eventHandlersModule?.body ||
      !ts.isModuleBlock(eventHandlersModule?.body)
    ) {
      // why do we throw here? shouldn't it fail sylintly? 
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
        // you can use here EVENTS_MODULE_PREFIX
        [`${Constants.EVENTS_INTERFACE_NAME}.${interfaceNodeName}`]: getEventHandlers(
          interfaceNodeName,
          interfaceNode
        )
      });
    }, {});
  };

  return {
    parse: generateComponentsMapEventHandlers
  };
};

export default getEventHandlersParser;
