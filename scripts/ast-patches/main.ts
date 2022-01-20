import path from "path";
import ts from "typescript";
import _ from "lodash";
import fs from "fs-extra";
import Constants from "../constants";
import astPatches from "./patches";
const applyAllPatches = _.flow(astPatches);
const RELATIVE_PATH_TO_ROOT_FOLDER = "../../";

const transformer = (/*context*/) => (
  sourceAst: ts.SourceFile
): ts.SourceFile =>
  ts.visitNode(sourceAst, mainNode => {
    try {
      return applyAllPatches(mainNode);
    } catch (e) {
      console.error(e);
      throw e;
    }
  });

const run = (sourceFilesPath: string): void => {
  const sourcefiles = fs
    .readdirSync(sourceFilesPath)
    .map(fileName =>
      path.join(
        __dirname,
        RELATIVE_PATH_TO_ROOT_FOLDER,
        Constants.TYPES_COMMON_PATH,
        fileName
      )
    );
  const tsProgram = ts.createProgram(sourcefiles, {});
  const sourceAst = sourcefiles.map(filePath => {
    return {
      path: filePath,
      ast: tsProgram.getSourceFile(filePath)
    };
  });
  if (!sourceAst) {
    return;
  }
  const transformationResult = sourceAst.map((file): {
    path: string;
    ast: ts.TransformationResult<ts.SourceFile> | undefined;
  } => {
    return {
      path: file.path,
      ast: file.ast ? ts.transform(file.ast, [transformer]) : undefined
    };
  });

  transformationResult.forEach(file => {
    if (!file.ast) {
      return;
    }
    const newContent = ts.createPrinter().printFile(file.ast.transformed[0]);
    fs.ensureFileSync(file.path);
    fs.writeFileSync(file.path, newContent);
  });
};

const DECLARATIONS_PATH = path.join(
  __dirname,
  RELATIVE_PATH_TO_ROOT_FOLDER,
  Constants.TYPES_COMMON_PATH
);
if (!fs.existsSync(DECLARATIONS_PATH)) {
  throw new Error(
    `Cannot find the declaration folder at [${DECLARATIONS_PATH}]`
  );
}

run(DECLARATIONS_PATH);
