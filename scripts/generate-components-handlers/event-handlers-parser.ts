import * as ts from "typescript";
import {
  EventHandler,
  HandlerArg
} from "../../src/dynamicTypes/eventHandlersService";
import Constants from "../constants";
import {
  getBaseClassesNames,
  getMethodParameterTypeDeclaration,
  getModuleDeclarationBody,
  getStatementByInterfaceName,
  isFunctionTypeNodeWithParameters
} from "./utils";
import { get$wModule } from "../ast-patches/utils";
const EVENT_TYPE_JS_DOC_TAG_NAME = "eventType";

export type ComponentsEventHandlers = {
  [name: string]: EventHandler[];
};

interface ComponentsEventHandlersCache {
  [name: string]: EventHandler[];
}

type EventHandlersParser = {
  parse: () => ComponentsEventHandlers;
};

const getEventHandlersParser = (
  typeChecker: ts.TypeChecker,
  sourceFile: ts.SourceFile
): EventHandlersParser => {
  const handlersCache: ComponentsEventHandlersCache = {};
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

  const isMethodEventHandler = (member: ts.TypeElement): boolean => {
    if (!member.name) {
      return false;
    }
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
  ): EventHandler[] => {
    return [...soFar, ...toMerge];
  };

  const getRootEventHandlers = (
    rootInterfaceName: string,
    interfaceNode: ts.InterfaceDeclaration
  ): EventHandler[] => {
    return interfaceNode.members
      .filter((member): member is ts.MethodSignature =>
        isMethodEventHandler(member)
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
    if (handlersCache[interfaceName]) {
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
    return componentHandlers;
  };

  const get$wComponentsModuleBody = (
    sourceFile: ts.SourceFile
  ): ts.ModuleBlock => {
    const $wModuleDeclaration = get$wModule(sourceFile);
    const $wModuleBody = getModuleDeclarationBody($wModuleDeclaration);
    if (!$wModuleBody) {
      throw new Error(
        `Failed finding the ${Constants.$W_MODULE_NAME} interface`
      );
    }
    return $wModuleBody;
  };

  const generateComponentsMapEventHandlers = (): ComponentsEventHandlers => {
    eventHandlersModuleBody = get$wComponentsModuleBody(sourceFile);
    const interfaces = eventHandlersModuleBody.statements.filter(
      (statement): statement is ts.InterfaceDeclaration => {
        return ts.isInterfaceDeclaration(statement);
      }
    );

    return interfaces.reduce((componentsMap, interfaceNode) => {
      const interfaceNodeName = interfaceNode.name.getText();
      return Object.assign(componentsMap, {
        [`${Constants.$W_MODULE_NAME}.${interfaceNodeName}`]: getEventHandlers(
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
