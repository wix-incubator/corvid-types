#!/usr/bin/env node
const tmp = require("tmp");
const fs = require("fs-extra");
const path = require("path");
const ts = require("typescript");
const without_ = require("lodash/without");

// process.env.RUN_BUILD_IN_ROOT_FOLDER = true;

const { TS_CONFIG_PATHS, TS_CONFIG_BASE_PATH } = require("../src/constants");
const FULL_CORVID_DECLARATION_NAME = "fullCorvidTypes.json";

// let i = 0;

const prepareEmptyTypescriptProgram = configPath => {
  const tmpDirPath = tmp.dirSync().name;
  const corvidDir = path.join(__dirname, "../");
  const corvidTsConfigPath = path.join(corvidDir, configPath);
  // create .tmp folder
  // const tmpDirPath = path.resolve(__dirname, "../", `emptyTsProject${i}`);
  // fs.ensureDirSync(tmpDirPath);
  // i++;

  const tmpConfigPath = `${tmpDirPath}/tsconfig.json`;
  const tmpConfigContent = `{"extends": "${path.resolve(
    corvidDir,
    configPath
  )}"}`;

  // const tmpConfigContent = `{"extends": "../${configPath}"}`;

  console.log("tmpDirPath", tmpDirPath);
  console.log("corvidDir", corvidDir);
  console.log("corvidTsConfigPath", corvidTsConfigPath);
  // console.log(fs.readdirSync(corvidDir));
  // console.log("tmpDirPath2", tmpDirPath2);

  console.log("tmpConfigPath", tmpConfigPath);
  console.log("tmpConfigContent", tmpConfigContent);
  console.log("configPath", configPath);
  console.log("configPath", path.join(__dirname, "../", configPath));
  console.log("path", path.relative(tmpConfigPath, configPath));
  console.log("*******************************************");

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
  console.log("LOCAL_DOCS_REPO_PATH", process.env.LOCAL_DOCS_REPO_PATH);
  console.log("__dirname", __dirname);
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
