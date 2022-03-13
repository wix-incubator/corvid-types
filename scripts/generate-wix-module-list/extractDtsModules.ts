/* eslint-disable @typescript-eslint/no-explicit-any */
import ts from "typescript";
import tmp from "tmp";
import fs from "fs-extra";
import {
  createTsProgram,
  getDirectoryFromPath,
  getPathsCompilerOptions
} from "../utils";

interface WithAmbientModuleNames extends ts.SourceFile {
  ambientModuleNames: Array<string>;
}
interface WithOptionalAmbientModuleNames extends ts.SourceFile {
  ambientModuleNames?: Array<string>;
}

tmp.setGracefulCleanup(); // cleans tmp file on process exit

/**
 * Takes in an array of dts files paths and returns a list of modules declared
 * in those dts
 * @param {[string]} dtsPaths - absolute paths
 */
const extractModules = (dtsPaths: string[] = []): string[] => {
  const configFile = tmp.fileSync();
  dtsPaths.forEach(filePath => {
    if (!fs.existsSync(filePath)) {
      throw new Error(`file ${filePath} does not exist`);
    }
  });

  const tsConfig = {
    files: dtsPaths,
    compilerOptions: {
      noLib: true,
      allowSyntheticDefaultImports: true,
      paths: getPathsCompilerOptions(
        getDirectoryFromPath(configFile.name),
        dtsPaths
      ),
      jsx: "react"
    }
  };

  fs.writeFileSync(configFile.fd, JSON.stringify(tsConfig));
  const program = createTsProgram(configFile.name);
  if (!program) {
    return [];
  }

  const modules = program
    .getSourceFiles()
    .filter(
      (
        source: WithOptionalAmbientModuleNames
      ): source is WithAmbientModuleNames => !!source.ambientModuleNames
    )
    .map(source => source.ambientModuleNames)
    .flat();

  return modules;
};
export default extractModules;
