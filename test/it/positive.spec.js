const tmp = require("tmp");
const fs = require("fs-extra");
const compiler = require("../utils/compiler");
const listSubDirectories = require("../utils/listSubDirectories");
const { getTsConfigByContext } = require("../utils/tsconfig");
const {
  getTestContext,
  handleWidget,
  handlePageElementsMap,
  createDeclarationsFilesByConfigPath
} = require("../utils/typesByContext");

const POSITIVE_ROOT_PATH = "test/it/code-samples/positive";
const positiveRoots = listSubDirectories(POSITIVE_ROOT_PATH);

describe("typescript - positive scenarios - configPaths flow", () => {
  it.each(positiveRoots)(
    "should successfully compile %s folder",
    async tsRootPath => {
      const testTmpDirPath = tmp.dirSync().name;
      const configurationFilename = `${testTmpDirPath}/tsconfig.json`;
      const tsConfigContent = getTsConfigByContext(
        getTestContext(tsRootPath),
        testTmpDirPath
      );

      fs.copySync(tsRootPath, testTmpDirPath);
      fs.writeFileSync(configurationFilename, tsConfigContent);

      handleWidget(testTmpDirPath, true);
      handlePageElementsMap(testTmpDirPath, true);

      expect(() => {
        compiler(configurationFilename);
      }).not.toThrow();
    }
  );
});

// TODO need to check the widgets functionality

describe("typescript - positive scenarios - declarations flow", () => {
  it.each(positiveRoots)(
    "should successfully compile %s folder",
    async tsRootPath => {
      const testTmpDirPath = tmp.dirSync().name;
      const configurationFilename = `${testTmpDirPath}/tsconfig.json`;

      fs.copySync(tsRootPath, testTmpDirPath);
      fs.writeFileSync(configurationFilename, getTsConfigByContext());

      createDeclarationsFilesByConfigPath(tsRootPath, testTmpDirPath, {
        elementsMap: handlePageElementsMap(testTmpDirPath),
        widgets: handleWidget(testTmpDirPath)
      });

      expect(() => {
        compiler(configurationFilename);
      }).not.toThrow();
    }
  );
});
