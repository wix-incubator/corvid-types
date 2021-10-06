import * as ts from "typescript";

interface CompilerSourceFile {
  fileName: string;
  content: string;
  sourceFile?: ts.SourceFile;
}

export const createCompilerHostForFile = (
  file: CompilerSourceFile
): ts.CompilerHost => {
  return {
    getSourceFile: fileName => {
      // why not doing if(file.sourceFile) ? i think it's more readable
      file.sourceFile =
        file.sourceFile ||
        ts.createSourceFile(
          fileName,
          file.content,
          // why is the script target set to ES2015
          ts.ScriptTarget.ES2015,
          true
        );
      return file.sourceFile;
    },
    getDefaultLibFileName: (defaultLibOptions: ts.CompilerOptions): string =>
      "/" + ts.getDefaultLibFileName(defaultLibOptions),
    // maybe should be dropped or consider using _.noop
    writeFile: () => {
      // do nothing.
    },
    getCurrentDirectory: () => "/",
    getDirectories: () => [],
    fileExists: fileName => {
      return fileName === file.fileName;
    },
    readFile: () => {
      return file.content;
    },
    // why do we need this?
    getCanonicalFileName: fileName => fileName,
    useCaseSensitiveFileNames: () => true,
    getNewLine: () => "\n",
    getEnvironmentVariable: () => ""
  };
};

export const getStatementByInterfaceName = (
  rootModuleBlock: ts.ModuleBlock,
  interfaceName: string
): ts.InterfaceDeclaration | undefined => {
  return rootModuleBlock.statements.find(
    (statement): statement is ts.InterfaceDeclaration => {
      return (
        ts.isInterfaceDeclaration(statement) &&
        statement.name.getText() === interfaceName
      );
    }
  );
};

export const getTypeNodeByName = (
  rootModuleBlock: ts.ModuleBlock,
  typeName: string
): ts.TypeAliasDeclaration | undefined => {
  return rootModuleBlock.statements.find(
    (statement): statement is ts.TypeAliasDeclaration => {
      return (
        ts.isTypeAliasDeclaration(statement) &&
        statement.name.getText() === typeName
      );
    }
  );
};
// a quiestion, what will happen if we will expose some modules a bit different? 
// for example from new (): Promise<void>; to new: () => Promise<void>; ?
export const getTypeEntityName = (entityName: ts.EntityName): string => {
  return ts.isQualifiedName(entityName)
    ? entityName.right.getText()
    : entityName.getText();
};

export const getMethodParameterTypeDeclaration = (
  rootModuleBlock: ts.ModuleBlock,
  methodSignature: ts.MethodSignature
): ts.TypeAliasDeclaration | undefined => {
  // use _.isEmpty
  if (methodSignature.parameters.length === 0) {
    return;
  }
  // imo const [handlerParam] = methodSignature.parameters is better
  const handlerParam = methodSignature.parameters[0];
  // consider extracting to a function that will describe better what it does and don't use == you can probebly use _.isEmpty or _.isNull
  if (handlerParam.type == null || !ts.isTypeReferenceNode(handlerParam.type)) {
    return;
  }

  const handlerTypeNameText = getTypeEntityName(handlerParam.type.typeName);
  return getTypeNodeByName(rootModuleBlock, handlerTypeNameText);
};

export const isFunctionTypeNodeWithParameters = (
  typeNode: ts.TypeNode
): typeNode is ts.FunctionTypeNode => {
  // use _.isEmpty
  return ts.isFunctionTypeNode(typeNode) && typeNode.parameters.length > 0;
};

export const getBaseClassesNames = (
  node: ts.InterfaceDeclaration
): string[] => {
  // _.isEmpty || _.isNull ?
  if (node.heritageClauses == null) {
    return [];
  }

  return node.heritageClauses
    .map(clause => clause.types)
    .reduce<ts.ExpressionWithTypeArguments[]>(
      (res, types) => [...res, ...types],
      []
    )
    .map(type => type.expression)
    .filter((expression): expression is ts.PropertyAccessExpression =>
      ts.isPropertyAccessExpression(expression)
    )
    .map(expression => expression.name.getText());
};
