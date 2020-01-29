const tmp = require("tmp");
const fs = require("fs-extra");
const { declarations } = require("../../dist/corvidTypes");
const compiler = require("../utils/compiler");
const listSubDirectories = require("../utils/listSubDirectories");
const getTsConfigByContext = require("../utils/tsconfig");
const POSITIVE_ROOT_PATH = "test/it/code-samples/positive";
const positiveRoots = listSubDirectories(POSITIVE_ROOT_PATH);

const getTestContext = path => {
  if (path.includes("/pages")) return "pages";
  if (path.includes("/backend")) return "backend";
  if (path.includes("/public")) return "public";
};

const getDeclarationsByTestPath = path => {
  switch (getTestContext(path)) {
    case "pages":
      return declarations.page();
    case "backend":
      return declarations.backend();
    case "public":
      return declarations.public();
  }
};

const createDynamicTypes = (path, types) => {
  const CORVID_DIRS = [
    "types",
    "types/common",
    "types/pages",
    "types/backend",
    "types/public"
  ];
  CORVID_DIRS.forEach(dir => {
    fs.ensureDirSync(`${path}/${dir}`);
  });
  types.forEach(file => {
    fs.writeFileSync(`${path}/types${file.path}`, file.content);
  });
};

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

      expect(() => {
        compiler(configurationFilename);
      }).not.toThrow();
    }
  );
});

describe("typescript - positive scenarios - declarations flow", () => {
  it.each(positiveRoots)(
    "should successfully compile %s folder",
    async tsRootPath => {
      // TODO need to make the backend tests pass
      // TODO need to check the pageElementsMap code (generate it from map object)
      // TODO need to check the widgets functionality
      const testTmpDirPath = tmp.dirSync().name;
      const configurationFilename = `${testTmpDirPath}/tsconfig.json`;
      fs.copySync(tsRootPath, testTmpDirPath);
      fs.writeFileSync(configurationFilename, getTsConfigByContext());
      const types = getDeclarationsByTestPath(tsRootPath);
      createDynamicTypes(testTmpDirPath, types);

      expect(() => {
        compiler(configurationFilename);
      }).not.toThrow();
    }
  );
});
