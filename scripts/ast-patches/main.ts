import path from "path";
import ts from "typescript";
import _ from "lodash";
import fs from "fs-extra";

import astPatches from ".";
const applyAllPatches = _.flow(astPatches);

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

const run = (sourceFilePath: string, outDirFilePath: string): void => {
  const tsProgram = ts.createProgram([sourceFilePath], {});
  const sourceAst = tsProgram.getSourceFile(sourceFilePath);
  if (!sourceAst) return;

  const transformationResult = ts.transform(sourceAst, [transformer]);
  const newContent = ts
    .createPrinter()
    .printFile(transformationResult.transformed[0]);

  fs.ensureFileSync(outDirFilePath);
  fs.writeFileSync(outDirFilePath, newContent);
};

const DECLARATIONS_PATH = path.join(
  __dirname,
  "../../types/common/declaration.d.ts"
);
if (!fs.existsSync(DECLARATIONS_PATH)) {
  throw new Error(`Cannot find the declaration file at [${DECLARATIONS_PATH}]`);
}

run(DECLARATIONS_PATH, DECLARATIONS_PATH);
