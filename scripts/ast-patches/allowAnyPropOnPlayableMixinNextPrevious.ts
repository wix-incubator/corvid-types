import ts from "typescript";
import { is$wModule, isInterfaceMixinMember, isMixinInterface } from "./utils";

const PLAYABLE_MIXIN_NAME = "PlayableMixin";
const PLAYABLE_MIXIN_NEXT_PROPERTY_NAME = "next";
const PLAYABLE_MIXIN_PREVIOUS_PROPERTY_NAME = "previous";
const allowAnyPropOnPlayableMixinNextPrevious = (
  ast: ts.SourceFile
): ts.SourceFile => {
  const $w = ast.statements.find(is$wModule);
  if (!$w || !$w.body || !ts.isModuleBlock($w.body)) return ast;

  const playableMixin = $w.body.statements.find(
    (statement): statement is ts.InterfaceDeclaration =>
      isMixinInterface(statement, PLAYABLE_MIXIN_NAME)
  );
  if (!playableMixin) return ast;

  const playableMixinNext = playableMixin.members.find(
    (member: ts.TypeElement): member is ts.PropertySignature =>
      isInterfaceMixinMember(member, PLAYABLE_MIXIN_NEXT_PROPERTY_NAME)
  );

  if (
    !playableMixinNext ||
    !playableMixinNext.type ||
    !ts.isTypeReferenceNode(playableMixinNext.type) ||
    !playableMixinNext.type.typeArguments
  )
    return ast;

  const playableMixinNextNewTypeArguments = [
    ts.factory.createIntersectionTypeNode([
      playableMixinNext.type.typeArguments[0],
      ts.factory.createTypeReferenceNode("AnyProperties")
    ])
  ];

  (playableMixinNext.type.typeArguments as Partial<
    ts.NodeArray<ts.TypeNode>
  >) = playableMixinNextNewTypeArguments;

  const playableMixinPrevious = playableMixin.members.find(
    (member: ts.TypeElement): member is ts.PropertySignature =>
      isInterfaceMixinMember(member, PLAYABLE_MIXIN_PREVIOUS_PROPERTY_NAME)
  );
  if (
    !playableMixinPrevious ||
    !playableMixinPrevious.type ||
    !ts.isTypeReferenceNode(playableMixinPrevious.type) ||
    !playableMixinPrevious.type.typeArguments
  )
    return ast;

  const playableMixinPreviousNewTypeArguments = [
    ts.factory.createIntersectionTypeNode([
      playableMixinPrevious.type.typeArguments[0],
      ts.factory.createTypeReferenceNode("AnyProperties")
    ])
  ];
  (playableMixinPrevious.type.typeArguments as Partial<
    ts.NodeArray<ts.TypeNode>
  >) = playableMixinPreviousNewTypeArguments;

  return ast;
};

export default allowAnyPropOnPlayableMixinNextPrevious;
