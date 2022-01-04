import ts from "typescript";
import { Writable } from "./utils";
const WIX_AUTH_NAME = "wix-auth";
const WIX_AUTH_ELEVATE_METHOD_NAME = "elevate";
const isWixAuthModule = (statement: ts.Statement) =>
  ts.isModuleDeclaration(statement) && statement.name.text === WIX_AUTH_NAME;
const isElevateMethod = (statement: ts.Statement) =>
  ts.isFunctionDeclaration(statement) &&
  (statement.name as ts.Identifier).escapedText ===
    WIX_AUTH_ELEVATE_METHOD_NAME;

const changeWixAuthElevateFunctionType = (
  ast: ts.SourceFile
): ts.SourceFile => {
  const wixAuthModule = ast.statements.find(
    isWixAuthModule
  ) as ts.ModuleDeclaration;

  if (!wixAuthModule) {
    return ast;
  }

  const elevateFunction = (wixAuthModule.body as ts.ModuleBlock).statements.find(
    isElevateMethod
  ) as ts.FunctionDeclaration;

  if (!elevateFunction) {
    return ast;
  }

  (elevateFunction.typeParameters as Partial<
    ts.NodeArray<ts.TypeParameterDeclaration>
  >) = [
    ts.factory.createTypeParameterDeclaration("T extends (...arg: any) => any")
  ] as ts.TypeParameterDeclaration[];

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

  (elevateFunction as Writable<
    ts.FunctionDeclaration
  >).type = ts.factory.createTypeReferenceNode(
    "(...param: Parameters<T>) => ReturnType<T>"
  );

  return ast;
};

export default changeWixAuthElevateFunctionType;
