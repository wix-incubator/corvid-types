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
      }).toThrowErrorMatchingSnapshot();
    }
  );
});

describe("typescript - negative scenarios - declarations flow", () => {
  it.each(negativeRoots)(
    "should fail compiling %s folder",
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
      }).toThrowErrorMatchingSnapshot();
    }
  );
});
