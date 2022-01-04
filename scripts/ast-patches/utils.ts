import ts from "typescript";
import Constants from "../constants";
export type Writable<T> = { -readonly [P in keyof T]: T[P] };

export const is$wModule = (statement: ts.Statement): boolean =>
  ts.isModuleDeclaration(statement) &&
  statement.name.text === Constants.$w_MODULE_NAME;

export const isMixinInterface = (
  statement: ts.Statement,
  mixinName: string
): boolean =>
  ts.isInterfaceDeclaration(statement) &&
  statement.name.escapedText === mixinName;

export const isInterfaceMixinMember = (
  member: ts.TypeElement,
  name: string
): boolean => (member.name as ts.Identifier).escapedText === name;
