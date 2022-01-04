import tmp from "tmp";
import ts from "typescript";
import fs from "fs-extra";
import _ from "lodash";

tmp.setGracefulCleanup(); // cleans tmp file on process exit

/**
 * Get a typescript compiled program and if has compile time error will throw error with
 * a formalized errors breakdown
 * @param {typescript.Program} program
 */
const detectErrors = (program: ts.Program): void => {
  const syntaxErrors = program
    .getSyntacticDiagnostics()
    .filter(diagnostic => diagnostic.category === ts.DiagnosticCategory.Error);

  if (_.isEmpty(syntaxErrors)) return;

  const errors = syntaxErrors.map(
    ({ file, start, messageText, code }) =>
      `\tAt ${file.fileName} position ${start} - ${messageText} (code - ${code})`
  );
  throw new Error(
    "Encountered the following error(s) while compiling:\n" +
      _.join(errors, "\n")
  );
};

const prepareEmptyTypescriptProgram = (configPath: string): string => {
  const tmpDir = tmp.dirSync();

  const tmpDirPath = tmpDir.name;

  const tmpConfigPath = `${tmpDirPath}/tsconfig.json`;
  const tmpConfigContent = `{"extends": "${configPath}"}`;

  fs.writeFileSync(tmpConfigPath, tmpConfigContent);
  fs.writeFileSync(`${tmpDirPath}/empty.js`, "");

  return tmpConfigPath;
};

const createTsProgram = (tsConfigPath: string): ts.Program => {
  const host = ts.sys;
  const tmpConfigPath = prepareEmptyTypescriptProgram(tsConfigPath);
  const onUnRecoverableConfigFileDiagnostic = (diagnostic: ts.Diagnostic) => {
    console.error(diagnostic);
  };
  const parsedCmd = ts.getParsedCommandLineOfConfigFile(
    tmpConfigPath,
    undefined,
    { onUnRecoverableConfigFileDiagnostic, ...host }
  ) as ts.ParsedCommandLine;

  const { options, fileNames } = parsedCmd;

  const program = ts.createProgram({
    rootNames: fileNames,
    options
  });

  // Check for compiler errors and throw if so
  detectErrors(program);

  return program;
};
export default createTsProgram;
