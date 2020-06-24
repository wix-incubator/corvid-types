const tmp = require("tmp");
const fs = require("fs-extra");
const _ = require("lodash");

const createTsProgram = require("./createTypescriptProgram");

tmp.setGracefulCleanup(); // cleans tmp file on process exit

/**
 * Takes in an array of dts files paths and returns a list of modules declared
 * in those dts
 * @param {[string]} dtsPaths - absolute paths
 */
module.exports = function extractModules(dtsPaths = []) {
  dtsPaths.forEach(filePath => {
    if (!fs.existsSync(filePath))
      throw new Error(`file ${filePath} does not exist`);
  });

  const tsConfig = {
    files: dtsPaths
  };
  const configFile = tmp.fileSync();
  fs.writeFileSync(configFile.fd, JSON.stringify(tsConfig));
  const program = createTsProgram(configFile.name);

  return _.chain(program)
    .invoke("getSourceFiles")
    .map("ambientModuleNames")
    .flatten()
    .value();
};
