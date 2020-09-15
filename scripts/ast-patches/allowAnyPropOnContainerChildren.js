const ts = require("typescript");

function allowAnyPropOnContainerChildren(ast) {
  const $w = ast.statements.find(
    statement =>
      ts.isModuleDeclaration(statement) && statement.name.escapedText === "$w"
  );
  const containableMixin = $w.body.statements.find(
    statement =>
      ts.isInterfaceDeclaration(statement) &&
      statement.name.escapedText === "ContainableMixin"
  );
  const containableMixinChildren = containableMixin.members.find(
    member => member.name.escapedText === "children"
  );

  containableMixinChildren.type = ts.factory.createArrayTypeNode(
    ts.factory.createIntersectionTypeNode([
      containableMixinChildren.type.elementType,
      ts.factory.createTypeReferenceNode("AnyProperties")
    ])
  );

  return ast;
}

module.exports = allowAnyPropOnContainerChildren;
