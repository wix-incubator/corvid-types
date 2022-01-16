import ts from "typescript";
import {
  is$wModule,
  isInterfaceMixinMember,
  isMixinInterface,
  Writable
} from "./utils";

const allowAnyPropOn$wEventTarget = (ast: ts.SourceFile): ts.SourceFile => {
  const $w = ast.statements.find(is$wModule);
  if (!$w || !$w.body || !ts.isModuleBlock($w.body)) return ast;

  const $wEvent = $w.body.statements.find(
    (statement): statement is ts.InterfaceDeclaration =>
      isMixinInterface(statement, "Event")
  );
  if (!$wEvent) return ast;

  const $wEventTarget = $wEvent.members.find((member): member is Writable<
    ts.PropertySignature
  > => isInterfaceMixinMember(member, "target"));
  if (!$wEventTarget || !$wEventTarget.type) return ast;

  $wEventTarget.type = ts.factory.createIntersectionTypeNode([
    $wEventTarget.type,
    ts.factory.createTypeReferenceNode("AnyProperties")
  ]);
  return ast;
};

export default allowAnyPropOn$wEventTarget;
