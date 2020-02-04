const path = require("path");
const fs = require("fs");
const shell = require("shelljs");
const { declarations } = require("../../dist/corvidTypes");

const getTestContext = testPath => {
  if (testPath.includes("/pages")) return "pages";
  if (testPath.includes("/backend")) return "backend";
  if (testPath.includes("/public")) return "public";
};

const getDeclarationsByTestPath = testPath => {
  switch (getTestContext(testPath)) {
    case "pages":
      return declarations.page();
    case "backend":
      return declarations.backend();
    case "public":
      return declarations.public();
  }
};

const createDeclarationsFilesByConfigPath = (testPath, tmpPath) => {
  const types = getDeclarationsByTestPath(testPath);
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
module.exports = {
  getTestContext,
  createDeclarationsFilesByConfigPath
};
