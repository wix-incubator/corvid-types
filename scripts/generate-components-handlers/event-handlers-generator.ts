import * as ts from "typescript";
import { createCompilerHostForFile } from "./utils";
import getEventHandlersParser from "./event-handlers-parser";
import fs from "fs";
import Constants from "../constants";
import { ComponentsEventHandlers } from "../../src/types";

const createProgram = (declarationsFileContents: string): ts.Program => {
  const file = {
    fileName: Constants.DECLARATIONS_DTS_FILENAME,
    content: declarationsFileContents
  };
  const compilerHost = createCompilerHostForFile(file);
  return ts.createProgram([file.fileName], {}, compilerHost);
};

const getSourceFile = (program: ts.Program) => {
  const sourceFile = program.getSourceFile(Constants.DECLARATIONS_DTS_FILENAME);
  if (!sourceFile) {
    throw new Error(
      `Failed creating source file ${Constants.DECLARATIONS_DTS_FILENAME}`
    );
  }

  return sourceFile;
};

/**
 * @throws {Error} in case of parsing failure
 */
const generateComponentsEventHandlersFromDTS = (
  declarationsPath: string
): ComponentsEventHandlers | never => {
  const declarationsFileContents = fs.readFileSync(declarationsPath, "utf-8");
  if (!declarationsFileContents) {
    throw new Error(`${declarationsPath} was not found`);
  }

  const program = createProgram(declarationsFileContents);
  const typeChecker = program.getTypeChecker();
  const sourceFile = getSourceFile(program);

  return getEventHandlersParser(typeChecker, sourceFile).parse();
};

export default generateComponentsEventHandlersFromDTS;
