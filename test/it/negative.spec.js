const compiler = require("../utils/compiler");
const listSubDirectories = require("../utils/listSubDirectories");
const {
  // initContextEnv,
  initEmptyEnv
} = require("../utils/createTmpTestEnvioremnts");
const {
  getDynamicPageTypings,
  // createDynamicPageTypings,
  createDeclarationsFilesByConfigPath
} = require("../utils/typesByContext");

const NEGATIVE_ROOT_PATH = "test/it/code-samples/negative";
const ignoredTests = [
  "test/it/code-samples/negative/pages-$w-dynamic-not-on-page"
];
const negativeRoots = listSubDirectories(NEGATIVE_ROOT_PATH).filter(
  subDirectory => !ignoredTests.includes(subDirectory)
);

// describe("typescript - negative scenarios - configPaths flow", () => {
//   it.each(negativeRoots)(
//     "should fail compiling %s folder",
//     async tsRootPath => {
//       const testTmpDirPath = initContextEnv(tsRootPath);

//       createDynamicPageTypings(testTmpDirPath);

//       expect(() => {
//         compiler(`${testTmpDirPath}/tsconfig.json`);
//       }).toThrowErrorMatchingSnapshot();
//     }
//   );
// });

describe("typescript - negative scenarios - declarations flow", () => {
  it.each(negativeRoots)(
    "should fail compiling %s folder",
    async tsRootPath => {
      const testTmpDirPath = initEmptyEnv(tsRootPath);

      createDeclarationsFilesByConfigPath(
        tsRootPath,
        testTmpDirPath,
        getDynamicPageTypings(testTmpDirPath)
      );

      expect(() => {
        compiler(`${testTmpDirPath}/tsconfig.json`);
      }).toThrowErrorMatchingSnapshot();
    }
  );
});
