import * as ts from "typescript";
import { createCompilerHostForFile } from "./utils";
import path from "path";
import getEventHandlersGenerator from "./events-handlers-parser";
import fs from "fs";

const DECLARATIONS_DTS_FILENAME = "declaration.d.ts";
const DECLARATIONS_DTS_PATH = path.join(
  __dirname,
  "../../types/common/",
  DECLARATIONS_DTS_FILENAME
);

const EVENT_HANDLERS_JSON_FILENAME = "eventHandlers.json";
const OUTPUT_PATH = path.join(
  __dirname,
  "../../dist/",
  EVENT_HANDLERS_JSON_FILENAME
);

const EVENTS_INTERFACE_NAME = "$w";

export type ComponentsMap = {
  [name: string]: EventHandler[];
};

export interface EventHandler {
  origin: string;
  name: string;
  description: string;
  kind: "function";
  type: string;
  handlerArgs: HandlerArg[];
}

interface HandlerArg {
  name: string;
  type: string | undefined;
}

export type EventsHandlersService = {
  generate: (declarationsPath: string) => ComponentsMap | null;
};

export type ComponentEventMethods = EventHandler[];

const getEventsHandlersService = (): EventsHandlersService => {
  const createProgram = (declarationsFileContents: string): ts.Program => {
    const file = {
      fileName: DECLARATIONS_DTS_FILENAME,
      content: declarationsFileContents
    };
    const compilerHost = createCompilerHostForFile(file);
    return ts.createProgram([file.fileName], {}, compilerHost);
  };

  const getSourceFile = (program: ts.Program) => {
    const sourceFile = program.getSourceFile(DECLARATIONS_DTS_FILENAME);
    if (!sourceFile) {
      throw new Error(
        `Failed creating source file ${DECLARATIONS_DTS_FILENAME}`
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
          statement.name.text === EVENTS_INTERFACE_NAME
        );
      }
    );

    if (
      !eventHandlersModule ||
      !eventHandlersModule?.body ||
      !ts.isModuleBlock(eventHandlersModule?.body)
    ) {
      throw new Error(`Failed finding the ${EVENTS_INTERFACE_NAME} interface`);
    }
    return eventHandlersModule.body;
  };

  /**
   * @throws {Error} in case of parsing failure
   */
  const generateComponentsEventHandlersFromDTS = (
    declarationsPath: string
  ): ComponentsMap => {
    const declarationsFileContents = fs.readFileSync(declarationsPath, "utf-8");
    if (!declarationsFileContents) {
      throw new Error(`${DECLARATIONS_DTS_PATH} was not found`);
    }

    const program = createProgram(declarationsFileContents);
    const typeChecker = program.getTypeChecker();
    const sourceFile = getSourceFile(program);
    const eventHandlersModuleBody = getEventHandlersModuleBody(sourceFile);

    return getEventHandlersGenerator(
      typeChecker,
      eventHandlersModuleBody
    ).generate();
  };

  return {
    generate: (declarationsPath: string): ComponentsMap | null => {
      try {
        return generateComponentsEventHandlersFromDTS(declarationsPath);
      } catch (e) {
        console.error(e);
      }

      return null;
    }
  };
};

if (require.main === module) {
  const generatedEvents = getEventsHandlersService().generate(
    DECLARATIONS_DTS_PATH
  );
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(generatedEvents));
}

export default getEventsHandlersService;
