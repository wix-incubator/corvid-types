#!/usr/bin/env node
import ts from "typescript";
import fs from "fs-extra";
import path from "path";

import createTsProgram from "../createTypescriptProgram";
import { NO_LIB_TS_CONFIG_PATHS } from "../../src/constants";

const projectRoot = path.join(__dirname, "../../");
const FULL_CORVID_DECLARATION_PATH = path.join(
  projectRoot,
  "dist",
  "fullCorvidTypes.json"
);

const getDeclarationFilesFromTsConfig = (configPath: string): string[] => {
  const program = createTsProgram(configPath);

  return program
    .getSourceFiles()
    .filter((file: ts.SourceFile) => file.isDeclarationFile)
    .map((file: ts.SourceFile) => file.fileName);
};

async function generateFullCorvidDeclarations() {
  const corvidLib: { [contextKey: string]: string[] } = {};
  Object.keys(NO_LIB_TS_CONFIG_PATHS).forEach((context: string) => {
    const configPath = NO_LIB_TS_CONFIG_PATHS[context] as string;
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
  ] as string[];

  const libs = uniqueLibs.map((libPath: string) => {
    return {
      path: libPath.split("corvid-types").pop(),
      content: fs.readFileSync(libPath, "utf8")
    };
  });

  fs.ensureFileSync(FULL_CORVID_DECLARATION_PATH);
  fs.writeFileSync(
    FULL_CORVID_DECLARATION_PATH,
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

generateFullCorvidDeclarations();
