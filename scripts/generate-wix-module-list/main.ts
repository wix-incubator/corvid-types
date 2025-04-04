#!/usr/bin/env node
import fs from "fs-extra";
import path from "path";
import extractDtsModules from "./extractDtsModules";
import Constants from "../constants";

const projectRoot = path.join(__dirname, "../../");
const TARGET_DTS_FOLDER = path.join(projectRoot, Constants.TYPES_COMMON_PATH);
const MODULE_LIST_FILE_PATH = path.join(
  projectRoot,
  Constants.DIST_BUILD_FOLDER,
  Constants.MODULE_LIST_FILENAME
);

const onlyUnique = (
  value: string,
  index: number,
  self: Array<string>
): boolean => {
  return self.indexOf(value) === index;
};
const filesToFilter = [
  Constants.$W_DECLARATION_FULL_FILENAME,
  Constants.DECLARATIONS_DTS_FILENAME,
  Constants.DECLARATIONS_DTS_FILENAME_DEPRECATED,
  Constants.REACT_VELO_FULL_FILENAME
];
function generateModuleList(): void {
  const sourcefiles = fs
    .readdirSync(TARGET_DTS_FOLDER)
    .map(fileName =>
      path.join(projectRoot, Constants.TYPES_COMMON_PATH, fileName)
    )
    .filter(f => !filesToFilter.some(toFilter => f.endsWith(toFilter)));

  const moduleListArray = extractDtsModules(sourcefiles);
  const uniqueModuleList = moduleListArray.filter(onlyUnique).sort();
  fs.ensureFileSync(MODULE_LIST_FILE_PATH);
  fs.writeFileSync(
    MODULE_LIST_FILE_PATH,
    JSON.stringify(uniqueModuleList, null, "\t")
  );
}

generateModuleList();
