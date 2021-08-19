import * as ts from "typescript";
import { createCompilerHostForFile } from "./utils";
import getEventHandlersParser from "./event-handlers-parser";
import fs from "fs";
import Constants from "../constants";
import { ComponentsEventHandlers } from "../types";

export type EventHandlersService = {
  generate: (declarationsPath: string) => ComponentsEventHandlers | null;
};

const getEventsHandlersService = (): EventHandlersService => {
  const createProgram = (declarationsFileContents: string): ts.Program => {
    const file = {
      fileName: Constants.DECLARATIONS_DTS_FILENAME,
      content: declarationsFileContents
    };
    const compilerHost = createCompilerHostForFile(file);
    return ts.createProgram([file.fileName], {}, compilerHost);
  };

  const getSourceFile = (program: ts.Program) => {
    const sourceFile = program.getSourceFile(
      Constants.DECLARATIONS_DTS_FILENAME
    );
    if (!sourceFile) {
      throw new Error(
        `Failed creating source file ${Constants.DECLARATIONS_DTS_FILENAME}`
      );
    }

    return sourceFile;
  };

  const getEventHandlersModuleBody = (
    sourceFile: ts.SourceFile
  ): ts.ModuleBlock => {
    const eventHandlersModule = sourceFile.statements.find(
      (statement): statement is ts.ModuleDeclaration => {
        return (
          ts.isModuleDeclaration(statement) &&
          statement.name.text === Constants.EVENTS_INTERFACE_NAME
        );
      }
    );

    if (
      !eventHandlersModule ||
      !eventHandlersModule?.body ||
      !ts.isModuleBlock(eventHandlersModule?.body)
    ) {
      throw new Error(
        `Failed finding the ${Constants.EVENTS_INTERFACE_NAME} interface`
      );
    }
    return eventHandlersModule.body;
  };

  /**
   * @throws {Error} in case of parsing failure
   */
  const generateComponentsEventHandlersFromDTS = (
    declarationsPath: string
  ): ComponentsEventHandlers => {
    const declarationsFileContents = fs.readFileSync(declarationsPath, "utf-8");
    if (!declarationsFileContents) {
      throw new Error(`${declarationsPath} was not found`);
    }

    const program = createProgram(declarationsFileContents);
    const typeChecker = program.getTypeChecker();
    const sourceFile = getSourceFile(program);
    const eventHandlersModuleBody = getEventHandlersModuleBody(sourceFile);

    return getEventHandlersParser(typeChecker, eventHandlersModuleBody).parse();
  };

  return {
    generate: (declarationsPath: string): ComponentsEventHandlers | never => {
      return generateComponentsEventHandlersFromDTS(declarationsPath);
    }
  };
};

export default getEventsHandlersService;
