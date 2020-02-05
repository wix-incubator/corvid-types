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

const NEGATIVE_ROOT_PATH = "test/it/code-samples/negative";
const ignoredTests = [
  "test/it/code-samples/negative/pages-$w-dynamic-not-on-page"
];
const negativeRoots = listSubDirectories(NEGATIVE_ROOT_PATH).filter(
  subDirectory => !ignoredTests.includes(subDirectory)
);

describe("typescript - negative scenarios - configPaths flow", () => {
  it.each(negativeRoots)(
    "should fail compiling %s folder",
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
      }).toThrowErrorMatchingSnapshot();
    }
  );
});

describe("typescript - negative scenarios - declarations flow", () => {
  it.each(negativeRoots)(
    "should fail compiling %s folder",
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
      }).toThrowErrorMatchingSnapshot();
    }
  );
});
