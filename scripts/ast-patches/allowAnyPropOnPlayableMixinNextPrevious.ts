import ts from "typescript";
import { is$wModule, isInterfaceMixinMember, isMixinInterface } from "./utils";

const PLAYABLE_MIXIN_NAME = "PlayableMixin";
const PLAYABLE_MIXIN_NEXT_PROPERTY_NAME = "next";
const PLAYABLE_MIXIN_PREVIOUS_PROPERTY_NAME = "previous";

const allowAnyPropOnPlayableMixinNextPrevious = (
  ast: ts.SourceFile
): ts.SourceFile => {
  const $w = ast.statements.find(is$wModule) as ts.ModuleDeclaration;
  const playableMixin = ($w.body as ts.ModuleBlock).statements.find(statement =>
    isMixinInterface(statement, PLAYABLE_MIXIN_NAME)
  ) as ts.InterfaceDeclaration;

  const playableMixinNext = playableMixin.members.find(
    (member: ts.TypeElement) =>
      isInterfaceMixinMember(member, PLAYABLE_MIXIN_NEXT_PROPERTY_NAME)
  ) as ts.PropertySignature;
  const [
    playableMixinNextTypeArgument
  ] = (playableMixinNext.type as ts.NodeWithTypeArguments)
    .typeArguments as ts.NodeArray<ts.TypeNode>;
  const playableMixinNextNewTypeArguments = [
    ts.factory.createIntersectionTypeNode([
      playableMixinNextTypeArgument,
      ts.factory.createTypeReferenceNode("AnyProperties")
    ])
  ] as ts.IntersectionTypeNode[];
  ((playableMixinNext.type as ts.NodeWithTypeArguments)
    .typeArguments as Partial<
    ts.NodeArray<ts.TypeNode>
  >) = playableMixinNextNewTypeArguments;

  const playableMixinPrevious = playableMixin.members.find(
    (member: ts.TypeElement) =>
      isInterfaceMixinMember(member, PLAYABLE_MIXIN_PREVIOUS_PROPERTY_NAME)
  ) as ts.PropertySignature;
  const [
    playableMixinPreviousTypeArgument
  ] = (playableMixinPrevious.type as ts.NodeWithTypeArguments)
    .typeArguments as ts.NodeArray<ts.TypeNode>;
  const playableMixinPreviousNewTypeArguments = [
    ts.factory.createIntersectionTypeNode([
      playableMixinPreviousTypeArgument,
      ts.factory.createTypeReferenceNode("AnyProperties")
    ])
  ] as ts.IntersectionTypeNode[];
  ((playableMixinPrevious.type as ts.NodeWithTypeArguments)
    .typeArguments as Partial<
    ts.NodeArray<ts.TypeNode>
  >) = playableMixinPreviousNewTypeArguments;

  return ast;
};

export default allowAnyPropOnPlayableMixinNextPrevious;
