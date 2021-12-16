#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");

const createTsProgram = require("./createTypescriptProgram");
const { NO_LIB_TS_CONFIG_PATHS } = require("../src/constants");

const projectRoot = path.join(__dirname, "../");
const FULL_CORVID_DECLARATION_PATH = path.join(
  projectRoot,
  "dist",
  "fullCorvidTypes.json"
);

const getDeclarationFilesFromTsConfig = configPath => {
  const program = createTsProgram(configPath);

  return program
    .getSourceFiles()
    .filter(file => file.isDeclarationFile)
    .map(file => file.path);
};

async function generateFullCorvidDeclarations() {
  const corvidLib = {};
  Object.keys(NO_LIB_TS_CONFIG_PATHS).forEach(context => {
    corvidLib[context] = getDeclarationFilesFromTsConfig(
      path.join(projectRoot, NO_LIB_TS_CONFIG_PATHS[context])
    );
  });

  const uniqueLibs = [
    ...new Set(
      Object.values(corvidLib).reduce((soFar, libs) => {
        return [...soFar, ...libs];
      }, [])
    )
  ];

  const libs = uniqueLibs.map(path => ({
    path: path.split("corvid-types").pop(),
    content: fs.readFileSync(path, "utf8")
  }));

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
