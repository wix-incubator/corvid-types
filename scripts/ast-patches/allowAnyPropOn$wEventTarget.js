const ts = require("typescript");

function allowAnyPropOn$wEventTarget(ast) {
  const $w = ast.statements.find(
    statement =>
      ts.isModuleDeclaration(statement) && statement.name.escapedText === "$w"
  );
  const $wEvent = $w.body.statements.find(
    statement =>
      ts.isInterfaceDeclaration(statement) &&
      statement.name.escapedText === "Event"
  );
  const $wEventTarget = $wEvent.members.find(
    member => member.name.escapedText === "target"
  );

  $wEventTarget.type = ts.factory.createIntersectionTypeNode([
    $wEventTarget.type,
    ts.factory.createTypeReferenceNode("AnyProperties")
  ]);
  return ast;
}

module.exports = allowAnyPropOn$wEventTarget;
