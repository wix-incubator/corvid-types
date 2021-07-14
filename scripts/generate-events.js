const ts = require("typescript");

const isMemberEventHandler = member => {
  return (
    ts.isMethodSignature(member) && member.name.escapedText.match(/^on[A-Z]/)
  );
};

const getBaseClassesNames = node => {
  if (node.heritageClauses == null) {
    return [];
  }

  return node.heritageClauses
    .map(clause => clause.types)
    .flat()
    .map(t => t.expression.name.escapedText);
};

class EventsGenerator {
  constructor(declarationsPath) {
    this.tsProgram = ts.createProgram([declarationsPath], {});
    this.typeChecker = this.tsProgram.getTypeChecker();
    this.sourceFile = this.tsProgram.getSourceFile(declarationsPath);
    this.$wNode = this.get$wModuleStatement(this.sourceFile);
  }

  doesInheritFrom$wNode(node) {
    return getBaseClassesNames(node).some(baseClassName =>
      ["Element", "Node"].includes(baseClassName)
    );
  }

  get$wModuleStatement() {
    return this.sourceFile.statements.find(
      statement =>
        ts.isModuleDeclaration(statement) && statement.name.escapedText === "$w"
    );
  }

  buildHandler(member) {
    return {
      name: member.name.escapedText,
      description: member.jsDoc ? member.jsDoc[0].comment : "",
      kind: "function",
      handlerArgs: member.parameters.map(parameter => {
        const typeNode = this.typeChecker.getTypeAtLocation(parameter);
        const aliasSymbol = typeNode.aliasSymbol;
        return {
          name: parameter.name.escapedText,
          type: aliasSymbol
            ? `${aliasSymbol.parent.escapedName}.${aliasSymbol.escapedName}`
            : undefined
        };
      })
    };
  }

  getInterfaceHandlersSetRecursivley(interfaceNode) {
    const { members } = interfaceNode;
    if (members == null || members.length === 0) {
      return [];
    }

    let rootHandlers = {};
    members.filter(isMemberEventHandler).forEach(member => {
      rootHandlers[member.name.escapedText] = this.buildHandler(member);
    });

    const baseClassesNodes = getBaseClassesNames(interfaceNode)
      .map(baseClassName => this.getStatementByInterfaceName(baseClassName))
      .filter(Boolean);

    if (baseClassesNodes == null || baseClassesNodes.length == 0) {
      return rootHandlers;
    }

    const baseClassHandlers = baseClassesNodes
      .map(baseClassNode =>
        this.getInterfaceHandlersSetRecursivley(baseClassNode)
      )
      .reduce(
        (handlersSoFar, handlersSet) => ({ ...handlersSoFar, ...handlersSet }),
        {}
      );

    return { ...rootHandlers, ...baseClassHandlers };
  }

  getStatementByInterfaceName(interfaceName) {
    return this.$wNode.body.statements.find(
      statement =>
        ts.isInterfaceDeclaration(statement) &&
        statement.name.escapedText === interfaceName
    );
  }

  generateEvents() {
    const $wInterfaces = this.$wNode.body.statements.filter(
      statement =>
        ts.isInterfaceDeclaration(statement) &&
        this.doesInheritFrom$wNode(statement)
    );

    return $wInterfaces.map(interfaceNode => {
      const handlers = Object.values(
        this.getInterfaceHandlersSetRecursivley(interfaceNode)
      );
      return {
        name: interfaceNode.name.escapedText,
        handlers: handlers.map(handler => ({
          origin: interfaceNode.name.escapedText,
          ...handler
        }))
      };
    });
  }
}

const generateEvents = declarationsPath => {
  const eventsGenerator = new EventsGenerator(declarationsPath);
  return eventsGenerator.generateEvents();
};

module.exports = {
  generateEvents
};
