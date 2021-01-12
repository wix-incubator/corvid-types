#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");
const without_ = require("lodash/without");

const customConfigPrefix = process.env.CUSTOM_SERVICES ? "customTypes" : ".";

const createTsProgram = require("./createTypescriptProgram");
const { TS_CONFIG_PATHS, TS_CONFIG_BASE_PATH } = require("../src/constants");

const projectRoot = path.join(__dirname, "../");
const FULL_CORVID_DECLARATION_PATH = path.join(
  projectRoot,
  customConfigPrefix,
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
  const corvidLib = {
    BASE: getDeclarationFilesFromTsConfig(
      path.join(projectRoot, TS_CONFIG_BASE_PATH)
    )
  };

  Object.keys(TS_CONFIG_PATHS).forEach(context => {
    corvidLib[context] = without_(
      getDeclarationFilesFromTsConfig(
        path.join(projectRoot, customConfigPrefix, TS_CONFIG_PATHS[context])
      ),
      ...corvidLib.BASE
    );
  });

  Object.keys(corvidLib).forEach(context => {
    corvidLib[context] = corvidLib[context].map(path => ({
      path: path.split("corvid-types").pop(),
      content: fs.readFileSync(path, "utf8")
    }));
  });

  fs.ensureFileSync(FULL_CORVID_DECLARATION_PATH);
  fs.writeFileSync(
    FULL_CORVID_DECLARATION_PATH,
    JSON.stringify(corvidLib, null, 2)
  );
}

generateFullCorvidDeclarations();
