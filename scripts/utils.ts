import tmp from "tmp";
import ts from "typescript";
import fs from "fs-extra";
import _ from "lodash";
import path from "path";
import Constants from "./constants";
tmp.setGracefulCleanup(); // cleans tmp file on process exit
const { $W_DECLARATION_FULL_FILENAME } = Constants;
const getFileNameFromPath = (strPath: string): string => {
  const parts = strPath.split("/");
  const fullname = parts[parts.length - 1];
  const [name] = fullname.split(".");
  return name;
};

export const getPathsCompilerOptions = (
  rootFolder: string,
  files: string[]
): ts.MapLike<string[]> => {
  return files.reduce((targetPaths, file) => {
    if (file.endsWith($W_DECLARATION_FULL_FILENAME)) {
      return targetPaths;
    }
    return {
      ...targetPaths,
      [getFileNameFromPath(file)]: [path.relative(rootFolder, file)]
    };
  }, {});
};

export const getDirectoryFromPath = (strPath: string) => {
  const parts = strPath.split("/");
  parts.pop();
  return parts.join("/");
};
/**
 * Get a typescript compiled program and if has compile time error will throw error with
 * a formalized errors breakdown
 * @param {typescript.Program} program
 */
const detectErrors = (program: ts.Program): void => {
  const syntaxErrors = program
    .getSyntacticDiagnostics()
    .filter(diagnostic => diagnostic.category === ts.DiagnosticCategory.Error);

  if (_.isEmpty(syntaxErrors)) {
    return;
  }

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

export const createTsProgram = (
  tsConfigPath: string
): ts.Program | undefined => {
  const host = ts.sys;
  const tmpConfigPath = prepareEmptyTypescriptProgram(tsConfigPath);
  const onUnRecoverableConfigFileDiagnostic = (diagnostic: ts.Diagnostic) => {
    console.error(diagnostic);
  };
  const parsedCmd = ts.getParsedCommandLineOfConfigFile(
    tmpConfigPath,
    undefined,
    { onUnRecoverableConfigFileDiagnostic, ...host }
  );
  if (!parsedCmd) {
    return undefined;
  }

  const { options, fileNames } = parsedCmd;

  const program = ts.createProgram({
    rootNames: fileNames,
    options
  });

  // Check for compiler errors and throw if so
  detectErrors(program);

  return program;
};
export default {
  createTsProgram,
  getDirectoryFromPath,
  getPathsCompilerOptions
};
