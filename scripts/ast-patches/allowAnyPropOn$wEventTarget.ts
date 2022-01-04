import ts from "typescript";
import {
  is$wModule,
  isInterfaceMixinMember,
  isMixinInterface,
  Writable
} from "./utils";

const allowAnyPropOn$wEventTarget = (ast: ts.SourceFile): ts.SourceFile => {
  const $w = ast.statements.find(is$wModule) as ts.ModuleDeclaration;
  const $wEvent = ($w.body as ts.ModuleBlock).statements.find(statement =>
    isMixinInterface(statement, "Event")
  ) as ts.InterfaceDeclaration;
  const $wEventTarget = $wEvent.members.find(member =>
    isInterfaceMixinMember(member, "target")
  ) as Writable<ts.PropertySignature>;

  $wEventTarget.type = ts.factory.createIntersectionTypeNode([
    $wEventTarget.type as ts.TypeNode,
    ts.factory.createTypeReferenceNode("AnyProperties")
  ]);
  return ast;
};

export default allowAnyPropOn$wEventTarget;
