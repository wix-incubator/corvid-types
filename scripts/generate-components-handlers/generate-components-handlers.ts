import * as ts from "typescript";

export interface ComponentsEventsMap {
  [name: string]: ComponentEventMethods;
}

export interface ComponentEventMethods {
  name: string;
  methods: Method[];
}

interface Method {
  signature: ts.MethodSignature;
  documentation: string;
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
  const handlersCache: ComponentsEventsMap = {};
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
    buildHandler(member: ts.MethodSignature): Method {
      const symbol = typeChecker.getSymbolAtLocation(member.name);
      const eventTypeTag = symbol
        ?.getJsDocTags(typeChecker)
        .find(tag => tag.name === EVENT_TYPE_JS_DOC_TAG_NAME);
      return {
        signature: member,
        documentation: ts.displayPartsToString([
          { text: "*", kind: "text" },
          ...(symbol?.getDocumentationComment(typeChecker) ?? []).map(
            commentLine => ({
              text: `\n * ${commentLine.text}`,
              kind: "text"
            })
          ),
          { text: "\n", kind: "text" },
          {
            text: `* @${eventTypeTag?.name} ${ts.displayPartsToString(
              eventTypeTag?.text
            )}`,
            kind: "text"
          },
          { text: "\n", kind: "text" }
        ])
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
    getInterfaceHandlersSetRecursivley(
      interfaceNode: ts.InterfaceDeclaration
    ): ComponentEventMethods {
      const interfaceName = interfaceNode.name.getText();
      if (completed[interfaceName]) {
        return handlersCache[interfaceName];
      }

      const rootMembers = interfaceNode.members
        .filter((member): member is ts.MethodSignature =>
          isMemberEventHandler(member as ts.MethodSignature, typeChecker)
        )
        .map(member => this.buildHandler(member));

      const baseClassesNodes = this.getBaseClassesNames(interfaceNode)
        .map(baseClassName => this.getStatementByInterfaceName(baseClassName))
        .filter((statement): statement is ts.InterfaceDeclaration =>
          Boolean(statement)
        );

      const baseHandlers = baseClassesNodes
        .map(baseClassNode =>
          this.getInterfaceHandlersSetRecursivley(baseClassNode)
        )
        .flat();

      const componentDefinition = {
        name: interfaceName,
        methods: [
          ...rootMembers,
          ...baseHandlers.map(base => base.methods).flat()
        ]
      };

      handlersCache[interfaceName] = componentDefinition;
      completed[interfaceName] = true;
      return componentDefinition;
    },
    generateComponentsHandlers(): ComponentsEventsMap {
      const $wInterfaces = $wBody.statements.filter(
        (statement): statement is ts.InterfaceDeclaration => {
          return ts.isInterfaceDeclaration(statement);
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
): ComponentsEventsMap => {
  const eventsGenerator = getEventsGenerator(declarationsPath);
  return eventsGenerator.generateComponentsHandlers();
};
