const tmp = require("tmp");
const path = require("path");
const fs = require("fs-extra");
const shell = require("shelljs");
const _ = require("lodash");
const { getEmptyTsConfig, getTsConfigByContext } = require("./tsconfig");

const createTestEnvioremnt = (tsRootPath, context) => {
  const testTmpDirPath = tmp.dirSync().name;
  fs.copySync(tsRootPath, testTmpDirPath);
  fs.writeFileSync(
    `${testTmpDirPath}/tsconfig.json`,
    context ? getTsConfigByContext(context, testTmpDirPath) : getEmptyTsConfig()
  );
  return testTmpDirPath;
};
module.exports = {
  full: (rootTestPath, types) => {
    const dir = createTestEnvioremnt(rootTestPath);
    types.forEach(file => {
      const relativePath = file.path.includes("node_modules")
        ? file.path.split("node_modules").pop()
        : file.path;
      shell.mkdir("-p", `${dir}${path.dirname(relativePath)}`);
      fs.writeFileSync(`${dir}${relativePath}`, file.content);
    });
    return dir;
  },
  dynamic: (rootTestPath, context, dynamicTypingsFiles) => {
    const dir = createTestEnvioremnt(rootTestPath, context);

    _.forOwn(dynamicTypingsFiles, (content, fileName) => {
      if (!_.isArray(content)) {
        fs.writeFileSync(`${dir}/${fileName}.d.ts`, content);
      } else {
        _.forEach(content, (fileContent, index) =>
          fs.writeFileSync(`${dir}/${fileName}${index}.d.ts`, fileContent)
        );
      }
    });

    return dir;
  }
};
