#!/usr/bin/env node
import fs from "fs-extra";
import path from "path";
import extractDtsModules from "./extractDtsModules";

const projectRoot = path.join(__dirname, "../../");
const MODULE_LIST_FILE_PATH = path.join(projectRoot, "dist", "wixModules.json");
const TARGET_DTS = [
  path.join(projectRoot, "types/common/declaration.d.ts") as string
];

function generateModuleList(): void {
  const moduleList = extractDtsModules(TARGET_DTS);
  fs.ensureFileSync(MODULE_LIST_FILE_PATH);
  fs.writeFileSync(
    MODULE_LIST_FILE_PATH,
    JSON.stringify(moduleList, null, "\t")
  );
}

generateModuleList();
