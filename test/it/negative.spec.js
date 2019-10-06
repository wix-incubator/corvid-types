const compiler = require("../utils/compiler");
const listSubDirectories = require("../utils/listSubDirectories");
const NEGATIVE_ROOT_PATH = "test/it/code-samples/negative";
const negativeRoots = listSubDirectories(NEGATIVE_ROOT_PATH);

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
