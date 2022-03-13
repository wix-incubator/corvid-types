import path from "path";
import fs from "fs-extra";
import { getPathsCompilerOptions } from "../../scripts/utils";
import Constants from "../../scripts/constants";
import SrcConstants from "../../src/constants";

const projectRoot = path.join(__dirname, "../../");
const TARGET_DTS_FOLDER = path.join(projectRoot, Constants.TYPES_COMMON_PATH);
const { TS_CONFIG_PATHS } = SrcConstants;
const filesToFilter = [
  Constants.$W_DECLARATION_FULL_FILENAME,
  Constants.DECLARATIONS_DTS_FILENAME,
  Constants.DECLARATIONS_DTS_FILENAME_DEPRECATED
];
const getWixModulesPaths = (): string[] =>
  fs
    .readdirSync(TARGET_DTS_FOLDER)
    .map((fileName: string) => path.join(TARGET_DTS_FOLDER, fileName))
    .filter(
      (f: string) => !filesToFilter.some(toFilter => f.endsWith(toFilter))
    );

const getBackendTsConfig = (testPath: string): string => `{
  "extends": "${path.relative(testPath, TS_CONFIG_PATHS.BACKEND)}",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": ${JSON.stringify(
      Object.assign(
        { "backend/*": ["./*"] },
        getPathsCompilerOptions(testPath, getWixModulesPaths())
      )
    )},
    "jsx": "react"
  }
}`;

const getPagesTsConfig = (testPath: string): string => `{
  "extends": "${path.relative(testPath, TS_CONFIG_PATHS.PAGES)}",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": ${JSON.stringify(
      Object.assign(
        { "public/*": ["./public/*"] },
        getPathsCompilerOptions(testPath, getWixModulesPaths())
      )
    )},
    "jsx": "react"
  }
}`;

const getPublicTsConfig = (testPath: string): string => `{
  "extends": "${path.relative(testPath, TS_CONFIG_PATHS.PUBLIC)}",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": ${JSON.stringify(
      Object.assign(
        { "public/*": ["./*"] },
        getPathsCompilerOptions(testPath, getWixModulesPaths())
      )
    )},
    "jsx": "react"
  }
}`;

const getEmptyTsConfig = () => `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "pages/*": ["./pages/*"],
      "public/*": ["./public/*"],
      "backend/*": ["./backend/*"]
    },
    "noLib": true,
    "allowJs": true,
    "noEmit": true,
    "checkJs": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "react"
  }
}`;

const getTsConfigByContext = (
  context: "page" | "public" | "backend",
  testPath: string
): string | undefined => {
  switch (context) {
    case "page":
      return getPagesTsConfig(testPath);
    case "public":
      return getPublicTsConfig(testPath);
    case "backend":
      return getBackendTsConfig(testPath);
  }
};

module.exports = {
  getEmptyTsConfig,
  getTsConfigByContext
};
