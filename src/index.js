const fullCorvidTypes = require("../dist/fullCorvidTypes.json");
const wixModulesNames = require("../dist/wixModules.json");

const { TS_CONFIG_PATHS } = require("./constants");
const dynamicTypings = require("./dynamicTypes");

module.exports = {
  configPaths: {
    page: `corvid-types/${TS_CONFIG_PATHS.PAGES}`,
    backend: `corvid-types/${TS_CONFIG_PATHS.BACKEND}`,
    public: `corvid-types/${TS_CONFIG_PATHS.PUBLIC}`
  },
  declarations: {
    page: ({ dependencies, elementsMap, widgets } = {}) => {
      return [
        ...fullCorvidTypes.BASE,
        ...fullCorvidTypes.PAGES,
        ...dynamicTypings.elementsMap.getFiles(elementsMap),
        ...dynamicTypings.widget.getFiles(widgets),
        ...dynamicTypings.packages.getFiles(dependencies)
      ];
    },
    backend: ({ dependencies }) => {
      return [
        ...fullCorvidTypes.BASE,
        ...fullCorvidTypes.BACKEND,
        ...dynamicTypings.packages.getFiles(dependencies)
      ];
    },
    public: ({ dependencies }) => {
      return [
        ...fullCorvidTypes.BASE,
        ...fullCorvidTypes.PUBLIC,
        ...dynamicTypings.packages.getFiles(dependencies)
      ];
    }
  },
  getWixModulesList: () => wixModulesNames,
  // Methods for Corvid-local (CLI)
  getWidgetTypeDeclarations: dynamicTypings.widget.getRaw,
  getPageElementsTypeDeclarations: dynamicTypings.elementsMap.getRaw,
  getPackageTypeDecelerations: dynamicTypings.packages.getRaw,
  getComponentsHandlers: () => {}
};
