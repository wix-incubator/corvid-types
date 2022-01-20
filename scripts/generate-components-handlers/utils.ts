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
      if (!file.sourceFile) {
        file.sourceFile = ts.createSourceFile(
          fileName,
          file.content,
          ts.ScriptTarget.ES2015,
          true
        );
      }
      return file.sourceFile;
    },
    getDefaultLibFileName: (defaultLibOptions: ts.CompilerOptions): string =>
      "/" + ts.getDefaultLibFileName(defaultLibOptions),
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
    getCanonicalFileName: fileName => fileName,
    useCaseSensitiveFileNames: () => true,
    getNewLine: () => "\n",
    getEnvironmentVariable: () => ""
  };
};

export const getModuleDeclarationBody = (
  moduleDeclaration: ts.ModuleDeclaration | undefined
): ts.ModuleBlock | undefined => {
  if (
    moduleDeclaration?.body == null ||
    !ts.isModuleBlock(moduleDeclaration.body)
  ) {
    return undefined;
  }

  return moduleDeclaration.body;
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

export const getTypeEntityName = (entityName: ts.EntityName): string => {
  return ts.isQualifiedName(entityName)
    ? entityName.right.getText()
    : entityName.getText();
};

export const getMethodParameterTypeDeclaration = (
  rootModuleBlock: ts.ModuleBlock,
  methodSignature: ts.MethodSignature
): ts.TypeAliasDeclaration | undefined => {
  if (methodSignature.parameters.length === 0) {
    return;
  }

  const [handlerParam] = methodSignature.parameters;
  if (handlerParam.type == null || !ts.isTypeReferenceNode(handlerParam.type)) {
    return;
  }

  const handlerTypeNameText = getTypeEntityName(handlerParam.type.typeName);
  return getTypeNodeByName(rootModuleBlock, handlerTypeNameText);
};

export const isFunctionTypeNodeWithParameters = (
  typeNode: ts.TypeNode
): typeNode is ts.FunctionTypeNode => {
  return ts.isFunctionTypeNode(typeNode) && typeNode.parameters.length > 0;
};

export const getBaseClassesNames = (
  node: ts.InterfaceDeclaration
): string[] => {
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
    .filter((expression): expression is ts.Identifier =>
      ts.isIdentifier(expression)
    )
    .map(expression => expression.getText());
};
