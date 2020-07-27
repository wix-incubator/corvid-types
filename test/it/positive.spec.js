const compiler = require("../utils/compiler");
const listSubDirectories = require("../utils/listSubDirectories");
const writeTypingsHelper = require("../utils/writeTypingsHelper");
const testParser = require("../utils/testParser");

const {
  declarations,
  getWidgetTypeDeclarations,
  getPageElementsTypeDeclarations,
  getNpmDependenciesTypesDeclarations
} = require("../../dist/corvidTypes.umd.js");

const POSITIVE_ROOT_PATH = "test/it/code-samples/positive";
const positiveRoots = listSubDirectories(POSITIVE_ROOT_PATH);

describe("typescript - positive scenarios - configPaths flow", () => {
  it.each(positiveRoots)(
    "should successfully compile %s folder",
    async tsRootPath => {
      const { context, elementsMap, widgets, dependencies } = testParser.read(
        tsRootPath
      );

      const dynamicTypings = {
        elementsMap: elementsMap
          ? getPageElementsTypeDeclarations(elementsMap)
          : null,
        dependencies: dependencies
          ? getNpmDependenciesTypesDeclarations(dependencies)
          : null,
        widgets: widgets ? widgets.map(getWidgetTypeDeclarations) : null
      };

      const testTmpDirPath = writeTypingsHelper.dynamic(
        tsRootPath,
        context,
        dynamicTypings
      );

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

      const allTypes = declarations[context]({
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
