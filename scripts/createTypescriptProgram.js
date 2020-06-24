const tmp = require("tmp");
const ts = require("typescript");
const fs = require("fs-extra");
const _ = require("lodash");

tmp.setGracefulCleanup(); // cleans tmp file on process exit

/**
 * Get a typescript compiled program and if has compile time error will throw error with
 * a formalized errors breakdown
 * @param {typescript.Program} program
 */
function detectErrors(program) {
  const syntaxErrors = program
    .getSyntacticDiagnostics()
    .filter(diagnostic => diagnostic.category === ts.DiagnosticCategory.Error);
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

  const program = ts.createProgram({
    rootNames: fileNames,
    options
  });

  // Check for compiler errors and throw if so
  detectErrors(program);

  return program;
};
