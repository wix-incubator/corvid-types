/**
 * @jest-environment jsdom
 */
const compiler = require("../utils/compiler");
const listSubDirectories = require("../utils/listSubDirectories");
const writeTypingsHelper = require("../utils/writeTypingsHelper");
const testParser = require("../utils/testParser");

const getDynamicTypings = require("../utils/dynamicTypings");
const { declarations } = require("../../src").default;

const POSITIVE_ROOT_PATH = "test/it/code-samples/positive";
const positiveRoots = listSubDirectories(POSITIVE_ROOT_PATH);

// global.Promise = jest.requireActual("promise");
describe("typescript - positive scenarios - configPaths flow", () => {
  it.each(positiveRoots)(
    "should successfully compile %s folder",
    async tsRootPath => {
      const { context, elementsMap, widgets, dependencies } = testParser.read(
        tsRootPath
      );

      const testTmpDirPath = writeTypingsHelper.dynamic(
        tsRootPath,
        context,
        getDynamicTypings({ elementsMap, dependencies, widgets })
      );

      expect(() => {
        compiler(`${testTmpDirPath}/tsconfig.json`);
      }).not.toThrow();
    }
  );
});

describe("DEPRECATED typescript - positive scenarios - declarations flow", () => {
  it.each(positiveRoots)(
    "should successfully compile %s folder",
    async tsRootPath => {
      const { context, elementsMap, widgets, dependencies } = testParser.read(
        tsRootPath
      );

      const allTypes = await declarations[context]({
        elementsMap,
        widgets,
        dependencies
      });

      const testTmpDirPath = writeTypingsHelper.full(tsRootPath, allTypes);

      expect(() => {
        compiler(`${testTmpDirPath}/tsconfig.json`);
      }).not.toThrow();
    }
  );
});

describe("typescript - positive scenarios - declarations flow", () => {
  it.each(positiveRoots)(
    "should successfully compile %s folder",
    async tsRootPath => {
      const { context, elementsMap, widgets, dependencies } = testParser.read(
        tsRootPath
      );
      const multipleFiles = true;
      const allTypes = await declarations[context]({
        multipleFiles,
        elementsMap,
        widgets,
        dependencies
      });

      const testTmpDirPath = writeTypingsHelper.full(tsRootPath, allTypes);

      expect(() => {
        compiler(`${testTmpDirPath}/tsconfig.json`);
      }).not.toThrow();
    }
  );
});
