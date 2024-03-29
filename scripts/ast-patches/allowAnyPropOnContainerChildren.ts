import ts from "typescript";
import {
  get$wModule,
  isInterfaceMixinMember,
  isMixinInterface,
  Writable
} from "./utils";

const CONTAINABLE_MIXIN = "ContainableMixin";
const CONTAINABLE_MIXIN_PROPERTY_CHILDREN = "children";

const allowAnyPropOnContainerChildren = (ast: ts.SourceFile): ts.SourceFile => {
  const $w = get$wModule(ast);
  if (!$w) {
    return ast;
  }
  const containableMixin = $w.body.statements.find(
    (statement): statement is ts.InterfaceDeclaration =>
      isMixinInterface(statement, CONTAINABLE_MIXIN)
  );
  if (!containableMixin) {
    return ast;
  }
  const containableMixinChildren = containableMixin.members.find(
    (member): member is Writable<ts.PropertySignature> =>
      isInterfaceMixinMember(member, CONTAINABLE_MIXIN_PROPERTY_CHILDREN)
  );
  if (
    !containableMixinChildren ||
    !containableMixinChildren.type ||
    !ts.isArrayTypeNode(containableMixinChildren.type)
  ) {
    return ast;
  }

  containableMixinChildren.type = ts.factory.createArrayTypeNode(
    ts.factory.createIntersectionTypeNode([
      containableMixinChildren.type.elementType,
      ts.factory.createTypeReferenceNode("AnyProperties")
    ])
  );

  return ast;
};

export default allowAnyPropOnContainerChildren;
