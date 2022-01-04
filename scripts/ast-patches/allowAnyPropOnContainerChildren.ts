import ts from "typescript";
import {
  is$wModule,
  isInterfaceMixinMember,
  isMixinInterface,
  Writable
} from "./utils";

const CONTAINABLE_MIXIN = "ContainableMixin";
const CONTAINABLE_MIXIN_PROPERTY_CHILDREN = "children";

const allowAnyPropOnContainerChildren = (ast: ts.SourceFile): ts.SourceFile => {
  const $w = ast.statements.find(is$wModule) as ts.ModuleDeclaration;
  const containableMixin = ($w.body as ts.ModuleBlock).statements.find(
    statement => isMixinInterface(statement, CONTAINABLE_MIXIN)
  ) as ts.InterfaceDeclaration;
  const containableMixinChildren = containableMixin.members.find(member =>
    isInterfaceMixinMember(member, CONTAINABLE_MIXIN_PROPERTY_CHILDREN)
  ) as Writable<ts.PropertySignature>;

  containableMixinChildren.type = ts.factory.createArrayTypeNode(
    ts.factory.createIntersectionTypeNode([
      (containableMixinChildren.type as ts.ArrayTypeNode).elementType,
      ts.factory.createTypeReferenceNode("AnyProperties")
    ])
  );

  return ast;
};

export default allowAnyPropOnContainerChildren;
