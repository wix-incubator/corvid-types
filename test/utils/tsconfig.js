const path = require("path");

const getBackendTsConfig = testPath => `{
  "extends": "${path.relative(testPath, "configs/tsconfig.backend.json")}",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "backend/*": ["./*"]
    }
  }
}`;

const getPagesTsConfig = testPath => `{
  "extends": "${path.relative(testPath, "configs/tsconfig.pages.json")}",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "public/*": ["./public/*"]
    }
  }
}`;

const getPublicTsConfig = testPath => `{
  "extends": "${path.relative(testPath, "configs/tsconfig.public.json")}",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "public/*": ["./*"]
    }
  }
}`;

const EMPTY_TS_CONFIG = `{
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "pages/*": ["./pages/*"],
      "public/*": ["./public/*"],
      "backend/*": ["./backend/*"]
    },
    noLib: true,
    allowJs: true,
    noEmit: true,
    checkJs: true,
    allowSyntheticDefaultImports: true,
  },
  "typeRoots": ["./types"],
  "types": ["./", "pages", "backend", "public"]
}`;

const getTsConfigByContext = (context, testPath) => {
  switch (context) {
    case "pages":
      return getPagesTsConfig(testPath);
    case "public":
      return getPublicTsConfig(testPath);
    case "backend":
      return getBackendTsConfig(testPath);
    default:
      return EMPTY_TS_CONFIG;
  }
};

module.exports = getTsConfigByContext;
