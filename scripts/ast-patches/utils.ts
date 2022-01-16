import ts from "typescript";
import Constants from "../constants";
export type Writable<T> = { -readonly [P in keyof T]: T[P] };

export const is$wModule = (
  statement: ts.Statement
): statement is ts.ModuleDeclaration =>
  ts.isModuleDeclaration(statement) &&
  statement.name.text === Constants.$w_MODULE_NAME;

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
