#!/usr/bin/env node
import ts from "typescript";
import fs from "fs-extra";
import path from "path";
import { createTsProgram } from "../utils";
import srcConstants from "../../src/constants";
import Constants from "../constants";
const {
  NO_LIB_TS_CONFIG_PATHS,
  NO_LIB_TS_CONFIG_PATHS_DEPRECATED
} = srcConstants;
const projectRoot = path.join(__dirname, "../../");

const FULL_CORVID_DECLARATION_PATH = path.join(
  projectRoot,
  Constants.DIST_BUILD_FOLDER,
  Constants.FULL_CORVID_DECLARATION_FILENAME
);

const FULL_CORVID_DECLARATION_PATH_DEPRECATED = path.join(
  projectRoot,
  Constants.DIST_BUILD_FOLDER,
  Constants.FULL_CORVID_DECLARATION_FILENAME_DEPRECATED
);

const getDeclarationFilesFromTsConfig = (configPath: string): string[] => {
  const program = createTsProgram(configPath);
  if (!program) {
    return [];
  }
  return program
    .getSourceFiles()
    .filter((file: ts.SourceFile) => file.isDeclarationFile)
    .map((file: ts.SourceFile) => file.fileName);
};

async function generateFullCorvidDeclarations(
  configPaths: { [contextKey: string]: string },
  jsonPath: string
) {
  const corvidLib: { [contextKey: string]: string[] } = {};
  Object.keys(configPaths).forEach((context: string) => {
    const configPath = configPaths[context];
    if (!configPath) {
      return;
    }
    corvidLib[context] = getDeclarationFilesFromTsConfig(
      path.join(projectRoot, configPath)
    );
  });

  const uniqueLibs = [
    ...new Set(
      Object.values(corvidLib).reduce((soFar, libs) => {
        return [...soFar, ...libs];
      }, [])
    )
  ];

  const libs = uniqueLibs.map((libPath: string) => {
    return {
      path: libPath.split("corvid-types").pop(),
      content: fs.readFileSync(libPath, "utf8")
    };
  });

  fs.ensureFileSync(jsonPath);
  fs.writeFileSync(
    jsonPath,
    JSON.stringify(
      {
        libs,
        contexts: corvidLib
      },
      null,
      2
    )
  );
}

generateFullCorvidDeclarations(
  NO_LIB_TS_CONFIG_PATHS,
  FULL_CORVID_DECLARATION_PATH
);
generateFullCorvidDeclarations(
  NO_LIB_TS_CONFIG_PATHS_DEPRECATED,
  FULL_CORVID_DECLARATION_PATH_DEPRECATED
);
