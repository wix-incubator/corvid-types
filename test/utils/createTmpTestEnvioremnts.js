const tmp = require("tmp");
const fs = require("fs-extra");
const { getEmptyTsConfig, getTsConfigByContext } = require("./tsconfig");
const { getTestContext } = require("./typesByContext");

module.exports = {
  initContextEnv: tsRootPath => {
    const testTmpDirPath = tmp.dirSync().name;
    const configurationFilename = `${testTmpDirPath}/tsconfig.json`;
    const tsConfigContent = getTsConfigByContext(
      getTestContext(tsRootPath),
      testTmpDirPath
    );

    fs.copySync(tsRootPath, testTmpDirPath);
    fs.writeFileSync(configurationFilename, tsConfigContent);
    return testTmpDirPath;
  },
  initEmptyEnv: tsRootPath => {
    const testTmpDirPath = tmp.dirSync().name;
    const configurationFilename = `${testTmpDirPath}/tsconfig.json`;

    fs.copySync(tsRootPath, testTmpDirPath);
    fs.writeFileSync(configurationFilename, getEmptyTsConfig());
    return testTmpDirPath;
  }
};
