const tmp = require("tmp");
const fs = require("fs-extra");
const _ = require("lodash");
const { DiagnosticCategory } = require("typescript");

const createTsProgram = require("./createTypescriptProgram");

tmp.setGracefulCleanup(); // cleans tmp file on process exit

/**
 * Get a typescript compiled program and if has compile time error will throw error with
 * a formalized errors breakdown
 * @param {typescript.Program} program
 */
function detectErrors(program) {
  const syntaxErrors = program
    .getSyntacticDiagnostics()
    .filter(diagnostic => diagnostic.category === DiagnosticCategory.Error);
  if (_.isEmpty(syntaxErrors)) return;

  const errors = syntaxErrors.map(
    ({ file, start, messageText, code }) =>
      `\tAt ${file.path} position ${start} - ${messageText} (code - ${code})`
  );
  throw new Error(
    "Encountered the following error(s) while compiling:\n" +
      _.join(errors, "\n")
  );
}

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

  // Throws in case of compiler time error
  detectErrors(program);

  return _.chain(program)
    .invoke("getSourceFiles")
    .map("ambientModuleNames")
    .flatten()
    .value();
};
