import ts from "typescript";
import Constants from "../constants";
export type Writable<T> = { -readonly [P in keyof T]: T[P] };
export interface ModuleDeclarationWithModuleBlock extends ts.ModuleDeclaration {
  body: ts.ModuleBlock;
}

export const is$wModule = (
  statement: ts.Statement
): statement is ModuleDeclarationWithModuleBlock =>
  ts.isModuleDeclaration(statement) &&
  statement.name.text === Constants.$W_MODULE_NAME &&
  !!statement.body &&
  ts.isModuleBlock(statement.body);

export const isGlobalModule = (
  statement: ts.Statement
): statement is ModuleDeclarationWithModuleBlock =>
  ts.isModuleDeclaration(statement) &&
  statement.name.text === "global" &&
  !!statement.body &&
  ts.isModuleBlock(statement.body);

export const isMixinInterface = (
  statement: ts.Statement,
  mixinName: string
): statement is ts.InterfaceDeclaration =>
  ts.isInterfaceDeclaration(statement) &&
  statement.name.escapedText === mixinName;

export const isInterfaceMixinMember = (
  member: ts.TypeElement,
  name: string
): member is ts.PropertySignature =>
  !!(
    member.name &&
    ts.isIdentifier(member.name) &&
    member.name.escapedText === name
  );

export const fetch$wModuleFromGlobal = (
  statement: ModuleDeclarationWithModuleBlock
): ModuleDeclarationWithModuleBlock | undefined => {
  return statement.body.statements.find(is$wModule);
};

export const get$wModule = (
  ast: ts.SourceFile
): ModuleDeclarationWithModuleBlock | undefined => {
  const globalStatment = ast.statements.find(isGlobalModule);
  const $w = globalStatment
    ? fetch$wModuleFromGlobal(globalStatment)
    : ast.statements.find(is$wModule);
  return $w;
};
