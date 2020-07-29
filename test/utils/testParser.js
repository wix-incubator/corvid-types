const fs = require("fs-extra");
const TEST_DEPENDENCIES_FILE_NAME = "dependencies.json";
const TEST_ELEMENTS_MAP_FILE_NAME = "pageElements.json";
const TEST_WIDGETS_FILE_NAME = "widgets.json";

const getTestDependencies = testPath => {
  if (!fs.existsSync(`${testPath}/${TEST_DEPENDENCIES_FILE_NAME}`)) {
    return undefined;
  }
  return JSON.parse(
    fs.readFileSync(`${testPath}/${TEST_DEPENDENCIES_FILE_NAME}`, "utf8")
  );
};

const getTestElementsMap = testPath => {
  if (!fs.existsSync(`${testPath}/${TEST_ELEMENTS_MAP_FILE_NAME}`)) {
    return undefined;
  }
  return JSON.parse(
    fs.readFileSync(`${testPath}/${TEST_ELEMENTS_MAP_FILE_NAME}`, "utf8")
  );
};

const getTestWidgets = testPath => {
  if (!fs.existsSync(`${testPath}/${TEST_WIDGETS_FILE_NAME}`)) {
    return undefined;
  }
  const { widgets } = JSON.parse(
    fs.readFileSync(`${testPath}/${TEST_WIDGETS_FILE_NAME}`, "utf8")
  );
  return widgets;
};

const getTestContext = testPath => {
  if (testPath.includes("/pages")) return "page";
  if (testPath.includes("/backend")) return "backend";
  if (testPath.includes("/public")) return "public";
};

module.exports = {
  read: tsRootPath => ({
    context: getTestContext(tsRootPath),
    dependencies: getTestDependencies(tsRootPath),
    elementsMap: getTestElementsMap(tsRootPath),
    widgets: getTestWidgets(tsRootPath)
  })
};
