const path = require("path");
const fs = require("fs-extra");
const shell = require("shelljs");
const {
  declarations,
  getWidgetTypeDeclarations,
  getPageElementsTypeDeclarations
} = require("../../dist/corvidTypes.umd.js");

const getTestContext = testPath => {
  if (testPath.includes("/pages")) return "pages";
  if (testPath.includes("/backend")) return "backend";
  if (testPath.includes("/public")) return "public";
};

const getDeclarationsByTestPath = (testPath, elementsMap, widgets) => {
  switch (getTestContext(testPath)) {
    case "pages":
      return declarations.page({ elementsMap, widgets });
    case "backend":
      return declarations.backend();
    case "public":
      return declarations.public();
  }
};

const createDeclarationsFilesByConfigPath = (
  testPath,
  tmpPath,
  { elementsMap, widgets } = {}
) => {
  const types = getDeclarationsByTestPath(testPath, elementsMap, widgets);
  types.forEach(file => {
    if (file.path.includes("node_modules")) {
      const relativePath = file.path.split("node_modules").pop();
      shell.mkdir("-p", `${tmpPath}${path.dirname(relativePath)}`);
      fs.writeFileSync(`${tmpPath}${relativePath}`, file.content);
    } else {
      shell.mkdir("-p", `${tmpPath}${path.dirname(file.path)}`);
      fs.writeFileSync(`${tmpPath}${file.path}`, file.content);
    }
  });
};

const createDynamicPageTypings = testPath => {
  handlePageElementsMap(testPath, true);
  handleWidget(testPath, true);
};

const getDynamicPageTypings = testTmpDirPath => ({
  elementsMap: handlePageElementsMap(testTmpDirPath),
  widgets: handleWidget(testTmpDirPath)
});

const handlePageElementsMap = (testPath, shouldWrite = false) => {
  let el;
  if (fs.existsSync(`${testPath}/pageElements.json`)) {
    el = JSON.parse(fs.readFileSync(`${testPath}/pageElements.json`, "utf8"));
    fs.removeSync(`${testPath}/pageElements.json`);

    if (shouldWrite) {
      fs.writeFileSync(
        `${testPath}/pageElements.d.ts`,
        getPageElementsTypeDeclarations(el)
      );
    } else {
      return el;
    }
  }
};

const handleWidget = (testPath, shouldWrite = false) => {
  let el;
  if (fs.existsSync(`${testPath}/widgets.json`)) {
    el = JSON.parse(fs.readFileSync(`${testPath}/widgets.json`, "utf8"));
    fs.removeSync(`${testPath}/widget.json`);

    if (shouldWrite) {
      el.widgets.forEach((widget, index) => {
        fs.writeFileSync(
          `${testPath}/widget${index}.d.ts`,
          getWidgetTypeDeclarations(widget)
        );
      });
    } else {
      return el ? el.widgets : undefined;
    }
  }
};

module.exports = {
  getTestContext,
  getDynamicPageTypings,
  createDynamicPageTypings,
  createDeclarationsFilesByConfigPath
};
