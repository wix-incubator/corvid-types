/* eslint-disable @typescript-eslint/no-explicit-any */
import tmp from "tmp";
import fs from "fs-extra";
import _ from "lodash";
import createTsProgram from "../createTypescriptProgram";

tmp.setGracefulCleanup(); // cleans tmp file on process exit

/**
 * Takes in an array of dts files paths and returns a list of modules declared
 * in those dts
 * @param {[string]} dtsPaths - absolute paths
 */
function extractModules(dtsPaths: string[] = []): string[] {
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

  return (_.chain(program).invoke("getSourceFiles") as any)
    .map("ambientModuleNames")
    .flatten()
    .value();
}
export default extractModules;
