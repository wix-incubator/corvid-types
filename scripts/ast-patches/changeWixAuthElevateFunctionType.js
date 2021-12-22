const ts = require("typescript");

function changeWixAuthElevateFunctionType(ast) {
  const wixAuthModule = ast.statements.find(
    statement =>
      ts.isModuleDeclaration(statement) && statement.name.text === "wix-auth"
  );

  if (!wixAuthModule) {
    return ast;
  }

  const elevateFunction = wixAuthModule.body.statements.find(
    statement =>
      ts.isFunctionDeclaration(statement) &&
      statement.name.escapedText === "elevate"
  );

  if (!elevateFunction) {
    return ast;
  }

  elevateFunction.typeParameters = [
    ts.factory.createTypeParameterDeclaration("T extends (...arg: any) => any")
  ];

  elevateFunction.parameters = [
    ts.factory.createParameterDeclaration(
      undefined,
      undefined,
      undefined,
      "func: T"
    )
  ];

  elevateFunction.type = ts.factory.createTypeReferenceNode(
    "(...param: Parameters<T>) => ReturnType<T>"
  );

  return ast;
}

module.exports = changeWixAuthElevateFunctionType;
