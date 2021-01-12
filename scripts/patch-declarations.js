const path = require("path");
const ts = require("typescript");
const _ = require("lodash");
const fs = require("fs-extra");

const astPatches = require("./ast-patches");
const applyAllPatches = _.flow(astPatches);

const transformer = (/*context*/) => sourceAst =>
  ts.visitNode(sourceAst, mainNode => {
    try {
      return applyAllPatches(mainNode);
    } catch (e) {
      console.error(e);
      throw e;
    }
  });

function run(sourceFilePath, outDirFilePath) {
  const tsProgram = ts.createProgram([sourceFilePath], {});
  const sourceAst = tsProgram.getSourceFile(sourceFilePath);

  const transformationResult = ts.transform(sourceAst, [transformer]);
  const newContent = ts
    .createPrinter()
    .printFile(transformationResult.transformed[0]);

  fs.ensureFileSync(outDirFilePath);
  fs.writeFileSync(outDirFilePath, newContent);
}

const DECLARATIONS_PATH = path.join(
  __dirname,
  process.env.CUSTOM_SERVICES ? "../customTypes" : "../",
  "types/common/declaration.d.ts"
);
if (!fs.existsSync(DECLARATIONS_PATH)) {
  throw new Error(`Cannot find the declaration file at [${DECLARATIONS_PATH}]`);
}

run(DECLARATIONS_PATH, DECLARATIONS_PATH);
