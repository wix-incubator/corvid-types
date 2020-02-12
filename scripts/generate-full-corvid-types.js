#!/usr/bin/env node
const tmp = require("tmp");
const fs = require("fs-extra");
const path = require("path");
const ts = require("typescript");
const without_ = require("lodash/without");

const { TS_CONFIG_PATHS, TS_CONFIG_BASE_PATH } = require("../src/constants");
const FULL_CORVID_DECLARATION_NAME = "fullCorvidTypes.json";

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
    FULL_CORVID_DECLARATION_NAME,
    JSON.stringify(corvidLib, null, 2)
  );
}

generateFullCorvidDeclarations();
