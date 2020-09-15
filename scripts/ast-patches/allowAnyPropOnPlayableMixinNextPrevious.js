const ts = require("typescript");

function allowAnyPropOnPlayableMixinNextPrevious(ast) {
  const $w = ast.statements.find(
    statement =>
      ts.isModuleDeclaration(statement) && statement.name.escapedText === "$w"
  );
  const playableMixin = $w.body.statements.find(
    statement =>
      ts.isInterfaceDeclaration(statement) &&
      statement.name.escapedText === "PlayableMixin"
  );

  const playableMixinNext = playableMixin.members.find(
    member => member.name.escapedText === "next"
  );
  playableMixinNext.type.typeArguments[0] = ts.factory.createIntersectionTypeNode(
    [
      playableMixinNext.type.typeArguments[0],
      ts.factory.createTypeReferenceNode("AnyProperties")
    ]
  );

  const playableMixinPrevious = playableMixin.members.find(
    member => member.name.escapedText === "previous"
  );
  playableMixinPrevious.type.typeArguments[0] = ts.factory.createIntersectionTypeNode(
    [
      playableMixinPrevious.type.typeArguments[0],
      ts.factory.createTypeReferenceNode("AnyProperties")
    ]
  );

  return ast;
}

module.exports = allowAnyPropOnPlayableMixinNextPrevious;
