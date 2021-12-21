const ts = require("typescript");

function changeWixAuthElevateFunctionType(ast) {
  const wixAuthModule = ast.statements.find(
    statement =>
      ts.isModuleDeclaration(statement) && statement.name.text === "wix-auth"
  );

  const elevateFunction = wixAuthModule.body.statements.find(
    statement =>
      ts.isFunctionDeclaration(statement) &&
      statement.name.escapedText === "elevate"
  );

  // ast code was added with the help of https://ts-ast-viewer.com/#
  elevateFunction.typeParameters = [getFunctionTypeParameter()];
  elevateFunction.parameters = [getFunctionParameter()];
  elevateFunction.type = getFunctionReturnType();

  return ast;
}

function getFunctionReturnType() {
  return ts.factory.createFunctionTypeNode(
    undefined,
    [
      ts.factory.createParameterDeclaration(
        undefined,
        undefined,
        ts.factory.createToken(ts.SyntaxKind.DotDotDotToken),
        ts.factory.createIdentifier("param"),
        undefined,
        ts.factory.createTypeReferenceNode(
          ts.factory.createIdentifier("Parameters"),
          [
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("T"),
              undefined
            )
          ]
        ),
        undefined
      )
    ],
    ts.factory.createTypeReferenceNode(
      ts.factory.createIdentifier("ReturnType"),
      [
        ts.factory.createTypeReferenceNode(
          ts.factory.createIdentifier("T"),
          undefined
        )
      ]
    )
  );
}

function getFunctionParameter() {
  return ts.factory.createParameterDeclaration(
    undefined,
    undefined,
    undefined,
    ts.factory.createIdentifier("func"),
    undefined,
    ts.factory.createTypeReferenceNode(
      ts.factory.createIdentifier("T"),
      undefined
    ),
    undefined
  );
}

function getFunctionTypeParameter() {
  return ts.factory.createTypeParameterDeclaration(
    ts.factory.createIdentifier("T"),
    ts.factory.createFunctionTypeNode(
      undefined,
      [
        ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          ts.factory.createToken(ts.SyntaxKind.DotDotDotToken),
          ts.factory.createIdentifier("arg"),
          undefined,
          ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
          undefined
        )
      ],
      ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
    ),
    undefined
  );
}

module.exports = changeWixAuthElevateFunctionType;
