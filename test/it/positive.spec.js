const compiler = require("../utils/compiler");
const listSubDirectories = require("../utils/listSubDirectories");
const POSITIVE_ROOT_PATH = "test/it/code-samples/positive";
const positiveRoots = listSubDirectories(POSITIVE_ROOT_PATH);

describe("typescript - positive scenarios", () => {
  it.each(positiveRoots)(
    "should successfully compile %s folder",
    async tsRootPath => {
      const configurationFilename = `${tsRootPath}/tsconfig.json`;
      expect(() => {
        compiler(configurationFilename);
      }).not.toThrow();
    }
  );
});
