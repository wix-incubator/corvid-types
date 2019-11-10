const compiler = require("../utils/compiler");
const listSubDirectories = require("../utils/listSubDirectories");

const NEGATIVE_ROOT_PATH = "test/it/code-samples/negative";
const ignoredTests = [
  "test/it/code-samples/negative/pages-$w-dynamic-not-on-page"
];
const negativeRoots = listSubDirectories(NEGATIVE_ROOT_PATH).filter(
  subDirectory => !ignoredTests.includes(subDirectory)
);

describe("typescript - negative scenarios", () => {
  it.each(negativeRoots)(
    "should fail compiling %s folder",
    async tsRootPath => {
      const configurationFilename = `${tsRootPath}/tsconfig.json`;

      expect(() => {
        compiler(configurationFilename);
      }).toThrowErrorMatchingSnapshot();
    }
  );
});
