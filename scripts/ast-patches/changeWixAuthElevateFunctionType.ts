import ts from "typescript";
import { Writable } from "./utils";
const WIX_AUTH_NAME = "wix-auth";
const WIX_AUTH_ELEVATE_METHOD_NAME = "elevate";

const isWixAuthModule = (
  statement: ts.Statement
): statement is ts.ModuleDeclaration =>
  ts.isModuleDeclaration(statement) && statement.name.text === WIX_AUTH_NAME;

const isElevateMethod = (
  statement: ts.Statement
): statement is Writable<ts.FunctionDeclaration> =>
  ts.isFunctionDeclaration(statement) &&
  statement.name?.escapedText === WIX_AUTH_ELEVATE_METHOD_NAME;

const changeWixAuthElevateFunctionType = (
  ast: ts.SourceFile
): ts.SourceFile => {
  const wixAuthModule = ast.statements.find(isWixAuthModule);
  if (
    !wixAuthModule ||
    !wixAuthModule.body ||
    !ts.isModuleBlock(wixAuthModule.body)
  ) {
    return ast;
  }

  const elevateFunction = wixAuthModule.body.statements.find(isElevateMethod);

  if (!elevateFunction) {
    return ast;
  }

  (elevateFunction.typeParameters as Partial<
    ts.NodeArray<ts.TypeParameterDeclaration>
  >) = [
    ts.factory.createTypeParameterDeclaration("T extends (...arg: any) => any")
  ];

  (elevateFunction.parameters as Partial<
    ts.NodeArray<ts.ParameterDeclaration>
  >) = [
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
};

export default changeWixAuthElevateFunctionType;
