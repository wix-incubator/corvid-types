const tmp = require("tmp");
const ts = require("typescript");
const fs = require("fs-extra");

tmp.setGracefulCleanup(); // cleans tmp file on process exit

const prepareEmptyTypescriptProgram = configPath => {
  const tmpDir = tmp.dirSync();

  const tmpDirPath = tmpDir.name;

  const tmpConfigPath = `${tmpDirPath}/tsconfig.json`;
  const tmpConfigContent = `{"extends": "${configPath}"}`;

  fs.writeFileSync(tmpConfigPath, tmpConfigContent);
  fs.writeFileSync(`${tmpDirPath}/empty.js`, "");

  return tmpConfigPath;
};

module.exports = function createTsProgram(tsConfigPath) {
  const host = ts.sys;
  const tmpConfigPath = prepareEmptyTypescriptProgram(tsConfigPath);
  const parsedCmd = ts.getParsedCommandLineOfConfigFile(
    tmpConfigPath,
    undefined,
    host
  );

  const { options, fileNames } = parsedCmd;

  return ts.createProgram({
    rootNames: fileNames,
    options
  });
};
