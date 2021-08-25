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
      file.sourceFile =
        file.sourceFile ||
        ts.createSourceFile(
          fileName,
          file.content,
          ts.ScriptTarget.ES2015,
          true
        );
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
