#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");

const createTsProgram = require("./createTypescriptProgram");
const { TS_CONFIG_PATHS } = require("../src/constants");

const projectRoot = path.join(__dirname, "../");
const FULL_CORVID_DECLARATION_PATH = path.join(
  projectRoot,
  "fullCorvidTypes.json"
);
const FULL_LIB_DECLARATION_PATH = path.join(projectRoot, "corvidTypesLib.json");

const getDeclarationFilesFromTsConfig = configPath => {
  const program = createTsProgram(configPath);

  return program
    .getSourceFiles()
    .filter(file => file.isDeclarationFile)
    .map(file => file.path);
};

async function generateFullCorvidDeclarations() {
  const corvidLib = {};
  const libs = {};

  Object.keys(TS_CONFIG_PATHS).forEach(context => {
    corvidLib[context] = getDeclarationFilesFromTsConfig(
      path.join(projectRoot, TS_CONFIG_PATHS[context])
    );
  });

  Object.keys(corvidLib).forEach(context => {
    corvidLib[context] = corvidLib[context].map(path => {
      const fixedPath = path.split("corvid-types").pop();
      libs[fixedPath] = fs.readFileSync(path, "utf8");
      return fixedPath;
    });
  });

  fs.ensureFileSync(FULL_CORVID_DECLARATION_PATH);
  fs.writeFileSync(
    FULL_CORVID_DECLARATION_PATH,
    JSON.stringify(corvidLib, null, 2)
  );
  fs.writeFileSync(FULL_LIB_DECLARATION_PATH, JSON.stringify(libs, null, 2));
}

generateFullCorvidDeclarations();
