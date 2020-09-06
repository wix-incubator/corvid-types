const tmp = require("tmp");
const path = require("path");
const fs = require("fs-extra");
const shell = require("shelljs");
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
  dynamic: (
    rootTestPath,
    context,
    { elementsMap, widgets, dependencies, jswFiles }
  ) => {
    const dir = createTestEnvioremnt(rootTestPath, context);
    if (elementsMap) {
      fs.writeFileSync(`${dir}/elementsMap.d.ts`, elementsMap);
    }
    if (widgets) {
      widgets.forEach((widget, i) => {
        fs.writeFileSync(`${dir}/widget${i}.d.ts`, widget);
      });
    }
    if (dependencies) {
      dependencies.forEach((module, i) => {
        fs.writeFileSync(`${dir}/dependency${i}.d.ts`, module);
      });
    }
    if (jswFiles) {
      fs.writeFileSync(`${dir}/jswUserModules.d.ts`, jswFiles);
    }

    return dir;
  }
};
