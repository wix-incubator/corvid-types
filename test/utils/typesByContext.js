const path = require("path");
const fs = require("fs-extra");
const shell = require("shelljs");
const {
  declarations,
  getWidgetTypeDeclarations,
  getPageElementsTypeDeclarations
} = require("../../dist/corvidTypes");

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

const handlePageElementsMap = (testPath, replace = false) => {
  let el;
  if (fs.existsSync(`${testPath}/pageElements.json`)) {
    el = JSON.parse(fs.readFileSync(`${testPath}/pageElements.json`, "utf8"));
    fs.removeSync(`${testPath}/pageElements.json`);

    if (replace) {
      fs.writeFileSync(
        `${testPath}/pageElements.d.ts`,
        getPageElementsTypeDeclarations(el)
      );
    } else {
      return el;
    }
  }
};

const handleWidget = (testPath, replace = false) => {
  let el;
  if (fs.existsSync(`${testPath}/widget.json`)) {
    el = JSON.parse(fs.readFileSync(`${testPath}/widget.json`, "utf8"));
    fs.removeSync(`${testPath}/widget.json`);

    if (replace) {
      fs.writeFileSync(
        `${testPath}/widget.d.ts`,
        getWidgetTypeDeclarations(el)
      );
    } else {
      return el ? [el] : undefined;
    }
  }
};

module.exports = {
  getTestContext,
  handleWidget,
  handlePageElementsMap,
  createDeclarationsFilesByConfigPath
};
