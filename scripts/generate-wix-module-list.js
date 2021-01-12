#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");

const extractDtsModules = require("./extractDtsModules");

const projectRoot = path.join(__dirname, "../");
const customsPrefix = process.env.CUSTOM_SERVICES ? "customTypes" : "";
const TARGET_DTS = [
  path.join(projectRoot, customsPrefix, "types/common/declaration.d.ts")
];
const MODULE_LIST_FILE_PATH = path.join(
  projectRoot,
  customsPrefix,
  "dist",
  "wixModules.json"
);

function generateModuleList() {
  const moduleList = extractDtsModules(TARGET_DTS);
  fs.ensureFileSync(MODULE_LIST_FILE_PATH);
  fs.writeFileSync(
    MODULE_LIST_FILE_PATH,
    JSON.stringify(moduleList, null, "\t")
  );
}

generateModuleList();
