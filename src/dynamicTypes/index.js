const {
  getPackageRawDeclaration,
  getPackagesTypeDeclarations
} = require("./npmDependencies");
const {
  getPageElementsRawDeclarations,
  getPageElementsTypeDeclarations
} = require("./elementsMap");
const {
  getWidgetRawDeclaration,
  getWidgetsTypeDeclarations
} = require("./widget");
const { getJswRawDeclaration, getJswTypeDeclarations } = require("./jswFiles");
const getJsonTypeDeclarations = require("./jsonFiles");

module.exports = {
  packages: {
    getRaw: getPackageRawDeclaration,
    getFiles: getPackagesTypeDeclarations
  },
  elementsMap: {
    getRaw: getPageElementsRawDeclarations,
    getFiles: getPageElementsTypeDeclarations
  },
  widget: {
    getRaw: getWidgetRawDeclaration,
    getFiles: getWidgetsTypeDeclarations
  },
  jsw: {
    getRaw: getJswRawDeclaration,
    getFiles: getJswTypeDeclarations
  },
  json: {
    getFiles: getJsonTypeDeclarations
  }
};
