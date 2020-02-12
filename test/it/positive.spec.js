const compiler = require("../utils/compiler");
const listSubDirectories = require("../utils/listSubDirectories");
const {
  initContextEnv,
  initEmptyEnv
} = require("../utils/createTmpTestEnvioremnts");
const {
  getDynamicPageTypings,
  createDynamicPageTypings,
  createDeclarationsFilesByConfigPath
} = require("../utils/typesByContext");

const POSITIVE_ROOT_PATH = "test/it/code-samples/positive";
const positiveRoots = listSubDirectories(POSITIVE_ROOT_PATH);

describe("typescript - positive scenarios - configPaths flow", () => {
  it.each(positiveRoots)(
    "should successfully compile %s folder",
    async tsRootPath => {
      const testTmpDirPath = initContextEnv(tsRootPath);
      createDynamicPageTypings(testTmpDirPath);

      expect(() => {
        compiler(`${testTmpDirPath}/tsconfig.json`);
      }).not.toThrow();
    }
  );
});

// todo:: seperate corvid-types changes to 2 commits
describe("typescript - positive scenarios - declarations flow", () => {
  it.each(positiveRoots)(
    "should successfully compile %s folder",
    async tsRootPath => {
      const testTmpDirPath = initEmptyEnv(tsRootPath);
      createDeclarationsFilesByConfigPath(
        tsRootPath,
        testTmpDirPath,
        getDynamicPageTypings(testTmpDirPath)
      );

      expect(() => {
        compiler(`${testTmpDirPath}/tsconfig.json`);
      }).not.toThrow();
    }
  );
});
