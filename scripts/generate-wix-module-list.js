#!/usr/bin/env node
const fs = require("fs-extra");
const _ = require("lodash");
const { corvidDir, createTsProgram } = require("./createTypescriptProgram");

const MODULE_LIST_FILE_NAME = "wixModules.json";
const TS_CONFIG = {
  files: ["types/common/declaration.d.ts"]
};

function generateModuleList() {
  let tmpConfigPath = `${corvidDir}/tsconfig.wix-api.json`;
  fs.writeJson(tmpConfigPath, TS_CONFIG)
    .then(() => createTsProgram(tmpConfigPath))
    .then(program =>
      _.chain(program)
        .invoke("getSourceFiles")
        .map("ambientModuleNames")
        .flatten()
        .value()
    )
    .then(moduleList =>
      fs.writeFile(
        MODULE_LIST_FILE_NAME,
        JSON.stringify(moduleList, null, "\t")
      )
    )
    .finally(() => fs.remove(tmpConfigPath));
}

generateModuleList();
