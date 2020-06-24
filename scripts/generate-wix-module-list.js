#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");

const extractDtsModules = require("./extractDtsModules");

const projectRoot = path.join(__dirname, "../");
const MODULE_LIST_FILE_NAME = path.join(projectRoot, "wixModules.json");
const TARGET_DTS = [path.join(projectRoot, "types/common/declaration.d.ts")];

function generateModuleList() {
  const moduleList = extractDtsModules(TARGET_DTS);
  fs.writeFileSync(
    MODULE_LIST_FILE_NAME,
    JSON.stringify(moduleList, null, "\t")
  );
}

generateModuleList();
