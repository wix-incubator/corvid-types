import * as ts from "typescript";

export interface ComponentDefinitionsMap {
  [name: string]: ComponentDefinition;
}

export interface ComponentDefinition {
  name: string;
  handlers: ComponentHandler[];
}

interface ComponentHandler {
  name: string;
  description?: string;
  kind: "function";
  handlerArgs: Array<HandlerArgs>;
  origin: string;
}

interface HandlerArgs {
  name: string;
  type?: string;
}

const EVENT_TYPE_JS_DOC_TAG_NAME = "eventType";

const isMemberEventHandler = (
  member: ts.MethodSignature,
  typeChecker: ts.TypeChecker
): boolean => {
  const docTags = typeChecker
    .getSymbolAtLocation(member.name)
    ?.getJsDocTags(typeChecker);
  return (
    docTags != null &&
    docTags.some(tag => tag.name === EVENT_TYPE_JS_DOC_TAG_NAME)
  );
};

const buildEventsGenerator = (
  typeChecker: ts.TypeChecker,
  $wBody: ts.ModuleBlock
) => {
  const handlersCache: ComponentDefinitionsMap = {};
  const completed: { [name: string]: boolean } = {};
  return {
    getBaseClassesNames(node: ts.InterfaceDeclaration): string[] {
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
    },
    doesInheritFrom$wNode(node: ts.InterfaceDeclaration): boolean {
      return this.getBaseClassesNames(node).some(baseClassName =>
        ["Element", "Node"].includes(baseClassName)
      );
    },
    buildHandler(member: ts.MethodSignature, origin: string): ComponentHandler {
      return {
        name: member.name?.getText() ?? "",
        origin,
        description: typeChecker
          .getSymbolAtLocation(member.name)
          ?.getDocumentationComment(typeChecker)
          ?.map(part => part.text)
          .join(),
        kind: "function",
        handlerArgs: member.parameters.map(parameter => {
          const typeNode = typeChecker.getTypeAtLocation(parameter);
          return {
            name: parameter.name.getText(),
            type: typeNode.aliasSymbol
              ? typeChecker.getFullyQualifiedName(typeNode.aliasSymbol)
              : undefined
          };
        })
      };
    },
    getStatementByInterfaceName(
      interfaceName: string
    ): ts.InterfaceDeclaration | undefined {
      return $wBody.statements.find(
        (statement): statement is ts.InterfaceDeclaration => {
          return (
            ts.isInterfaceDeclaration(statement) &&
            statement.name.getText() === interfaceName
          );
        }
      );
    },
    combineHandlers(
      interfaceName: string,
      rootHandlers: ComponentHandler[],
      baseClassesDefinitions: ComponentDefinition[]
    ): ComponentDefinition {
      const combinedHandlers: { [name: string]: ComponentHandler } = {};
      rootHandlers.forEach(
        handler => (combinedHandlers[handler.name] = handler)
      );

      baseClassesDefinitions
        .reduce<ComponentHandler[]>((handlersSoFar, definition) => {
          return [...handlersSoFar, ...definition.handlers];
        }, [])
        .forEach(handler => {
          if (combinedHandlers[handler.name]) {
            return;
          }

          combinedHandlers[handler.name] = handler;
        });

      return {
        name: interfaceName,
        handlers: Object.values(combinedHandlers).map(handler => ({
          ...handler,
          origin: interfaceName
        }))
      };
    },
    getInterfaceHandlersSetRecursivley(
      interfaceNode: ts.InterfaceDeclaration
    ): ComponentDefinition {
      const interfaceName = interfaceNode.name.getText();
      if (completed[interfaceName]) {
        return handlersCache[interfaceName];
      }

      const rootHandlers = interfaceNode.members
        .filter((member): member is ts.MethodSignature =>
          isMemberEventHandler(member as ts.MethodSignature, typeChecker)
        )
        .map(member => this.buildHandler(member, interfaceName));

      const baseClassesNodes = this.getBaseClassesNames(interfaceNode)
        .map(baseClassName => this.getStatementByInterfaceName(baseClassName))
        .filter((statement): statement is ts.InterfaceDeclaration =>
          Boolean(statement)
        );

      const baseHandlers = baseClassesNodes.map(baseClassNode =>
        this.getInterfaceHandlersSetRecursivley(baseClassNode)
      );
      const componentDefinition = this.combineHandlers(
        interfaceName,
        rootHandlers,
        baseHandlers
      );

      handlersCache[interfaceName] = componentDefinition;
      completed[interfaceName] = true;
      return componentDefinition;
    },
    generateComponentsHandlers(): ComponentDefinitionsMap {
      const $wInterfaces = $wBody.statements.filter(
        (statement): statement is ts.InterfaceDeclaration => {
          return (
            ts.isInterfaceDeclaration(statement) &&
            this.doesInheritFrom$wNode(statement)
          );
        }
      );

      return $wInterfaces
        .map(interfaceNode =>
          this.getInterfaceHandlersSetRecursivley(interfaceNode)
        )
        .reduce((definitions, interfaceDefinition) => {
          return {
            ...definitions,
            [interfaceDefinition.name]: interfaceDefinition
          };
        }, {});
    }
  };
};

const getEventsGenerator = (declarationsPath: string) => {
  const tsProgram = ts.createProgram([declarationsPath], {});
  const typeChecker = tsProgram.getTypeChecker();
  const sourceFile = tsProgram.getSourceFile(declarationsPath);

  if (!sourceFile) {
    throw new Error(`Unable to read source file ${declarationsPath}`);
  }

  const $wNode = sourceFile.statements.find(statement => {
    return ts.isModuleDeclaration(statement) && statement.name.text === "$w";
  });

  if (!$wNode || !ts.isModuleDeclaration($wNode)) {
    throw new Error("Couldn't find the $w declaration statement");
  }

  const $wBody =
    $wNode.body && ts.isModuleBlock($wNode.body) ? $wNode.body : null;
  if (!$wBody) {
    throw new Error("$wNode body is not a module block");
  }

  return buildEventsGenerator(typeChecker, $wBody);
};

export const generateComponentsHandlers = (
  declarationsPath: string
): ComponentDefinitionsMap => {
  try {
    const eventsGenerator = getEventsGenerator(declarationsPath);
    return eventsGenerator.generateComponentsHandlers();
  } catch (e) {
    console.error(e);
    return {};
  }
};
