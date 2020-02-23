#!/usr/bin/env node
const tmp = require("tmp");
const fs = require("fs-extra");
const path = require("path");
const ts = require("typescript");
const without_ = require("lodash/without");

const { TS_CONFIG_PATHS, TS_CONFIG_BASE_PATH } = require("../src/constants");
const FULL_CORVID_DECLARATION_NAME = "fullCorvidTypes.json";
// let folderIndex = 1;

const prepareEmptyTypescriptProgram = configPath => {
  const tmpDirPath = tmp.dirSync().name;
  // const tmpDirPath = `tempRelativeFolder${folderIndex}`;
  // fs.mkdirSync(`./${tmpDirPath}`);
  // folderIndex++;
  console.log(tmpDirPath);
  const tmpConfigPath = `${tmpDirPath}/tsconfig.json`;
  const tmpConfigContent = `{"extends": "${path.relative(
    tmpConfigPath,
    configPath
  )}"}`;

  fs.writeFileSync(tmpConfigPath, tmpConfigContent);
  fs.writeFileSync(`${tmpDirPath}/empty.js`, "() => {}");

  console.log("tmpConfigContent", tmpConfigContent);

  const files = fs.readdirSync(tmpDirPath);
  console.log(files);
  return tmpConfigPath;
};

const getDeclarationFilesFromTsConfig = configPath => {
  const host = ts.sys;
  const tmpConfigPath = prepareEmptyTypescriptProgram(configPath);
  console.log("tmpConfigPath", tmpConfigPath);
  const parsedCmd = ts.getParsedCommandLineOfConfigFile(
    tmpConfigPath,
    undefined,
    host
  );

  const { options, fileNames } = parsedCmd;
  console.log("fileNames", fileNames);

  const program = ts.createProgram({
    rootNames: fileNames,
    options
  });

  console.log("getSourceFiles", program.getSourceFiles().length);
  return program
    .getSourceFiles()
    .filter(file => file.isDeclarationFile)
    .map(file => file.path);
};

function generateFullCorvidDeclarations() {
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

  console.log(corvidLib);

  fs.writeFileSync(
    FULL_CORVID_DECLARATION_NAME,
    JSON.stringify(corvidLib, null, 2)
  );
  const newCorvid = fs.readFileSync(FULL_CORVID_DECLARATION_NAME);
  console.log(FULL_CORVID_DECLARATION_NAME, newCorvid);
}

generateFullCorvidDeclarations();
