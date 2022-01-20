import ts from "typescript";
import {
  isGlobalModule,
  is$wModule,
  fetch$wModuleFromGlobal,
  isInterfaceMixinMember,
  isMixinInterface
} from "./utils";

const PLAYABLE_MIXIN_NAME = "PlayableMixin";
const PLAYABLE_MIXIN_NEXT_PROPERTY_NAME = "next";
const PLAYABLE_MIXIN_PREVIOUS_PROPERTY_NAME = "previous";

const $wMixinAllowAnyPropTypeArguments = ({
  ast,
  mixinName,
  memberName
}: {
  ast: ts.SourceFile;
  mixinName: string;
  memberName: string;
}): void => {
  const globalStatment = ast.statements.find(isGlobalModule);
  const $w = globalStatment
    ? fetch$wModuleFromGlobal(globalStatment)
    : ast.statements.find(is$wModule);
  if (!$w || !$w.body || !ts.isModuleBlock($w.body)) {
    return;
  }

  const mixin = $w.body.statements.find(
    (statement): statement is ts.InterfaceDeclaration =>
      isMixinInterface(statement, mixinName)
  );
  if (!mixin) {
    return;
  }

  const mixinMember = mixin.members.find(
    (member: ts.TypeElement): member is ts.PropertySignature =>
      isInterfaceMixinMember(member, memberName)
  );

  if (
    !mixinMember ||
    !mixinMember.type ||
    !ts.isTypeReferenceNode(mixinMember.type) ||
    !mixinMember.type.typeArguments
  ) {
    return;
  }

  const newTypeArguments = [
    ts.factory.createIntersectionTypeNode([
      mixinMember.type.typeArguments[0],
      ts.factory.createTypeReferenceNode("AnyProperties")
    ])
  ];

  (mixinMember.type.typeArguments as Partial<
    ts.NodeArray<ts.TypeNode>
  >) = newTypeArguments;
};

const allowAnyPropOnPlayableMixinNextPrevious = (
  ast: ts.SourceFile
): ts.SourceFile => {
  $wMixinAllowAnyPropTypeArguments({
    ast,
    mixinName: PLAYABLE_MIXIN_NAME,
    memberName: PLAYABLE_MIXIN_NEXT_PROPERTY_NAME
  });
  $wMixinAllowAnyPropTypeArguments({
    ast,
    mixinName: PLAYABLE_MIXIN_NAME,
    memberName: PLAYABLE_MIXIN_PREVIOUS_PROPERTY_NAME
  });
  return ast;
};

export default allowAnyPropOnPlayableMixinNextPrevious;
