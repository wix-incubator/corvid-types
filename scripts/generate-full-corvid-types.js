#!/usr/bin/env node
const tmp = require("tmp");
const fs = require("fs-extra");
const path = require("path");
const ts = require("typescript");
const without_ = require("lodash/without");
const TS_CONFIG_PATHS = {
  BACKEND: "configs/tsconfig.backend.json",
  PUBLIC: "configs/tsconfig.public.json",
  PAGES: "configs/tsconfig.pages.json"
};
// TODO:: fix this by creating all "projects" in tmp folder and generate the path :)
const TS_CONFIG_BASE_PATH = "configs/tsconfig.base.json";
const FULL_CORVID_DECLARATION_PATH = "fullCorvidTypes.json";

const prepareEmptyTypescriptProgram = configPath => {
  const tmpDirPath = tmp.dirSync().name;

  const tmpConfigPath = `${tmpDirPath}/tsconfig.json`;
  const tmpConfigContent = `{"extends": "${path.relative(
    tmpConfigPath,
    configPath
  )}"}`;

  fs.writeFileSync(tmpConfigPath, tmpConfigContent);
  fs.writeFileSync(`${tmpDirPath}/empty.js`, "");

  return tmpConfigPath;
};

const getDeclarationFilesFromTsConfig = configPath => {
  const host = ts.sys;
  const tmpConfigPath = prepareEmptyTypescriptProgram(configPath);
  const parsedCmd = ts.getParsedCommandLineOfConfigFile(
    tmpConfigPath,
    undefined,
    host
  );

  const { options, fileNames } = parsedCmd;

  const program = ts.createProgram({
    rootNames: fileNames,
    options
  });

  return program
    .getSourceFiles()
    .filter(file => file.isDeclarationFile)
    .map(file => file.path);
};

async function generateFullCorvidDeclarations() {
  const corvidLib = {
    BASE: getDeclarationFilesFromTsConfig(TS_CONFIG_BASE_PATH)
  };

  Object.keys(TS_CONFIG_PATHS).forEach(context => {
    corvidLib[context] = without_(
      getDeclarationFilesFromTsConfig(TS_CONFIG_PATHS[context]),
      ...corvidLib.BASE
    );
  });

  Object.keys(corvidLib).forEach(context => {
    corvidLib[context] = corvidLib[context].map(path => ({
      path: path.split("corvid-types").pop(),
      content: fs.readFileSync(path, "utf8")
    }));
  });

  fs.writeFileSync(
    FULL_CORVID_DECLARATION_PATH,
    JSON.stringify(corvidLib, null, 2)
  );
}

generateFullCorvidDeclarations();
