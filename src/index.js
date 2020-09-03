const fullCorvidTypes = require("../fullCorvidTypes.json");
const wixModulesNames = require("../wixModules.json");
const { TS_CONFIG_PATHS } = require("./constants");
const {
  getAmbientModuleDeclaration,
  getNpmDependenciesTypesDeclarations
} = require("./dynamicTypes/npmDependencies");
const {
  getPageElementsTypeDeclarations,
  getPageElementsRawDeclarations
} = require("./dynamicTypes/elementsMap");
const {
  getWidgetsTypeDeclarations,
  getWidgetDeclaration
} = require("./dynamicTypes/widget");
const {
  getJswRawDeclaration,
  getJswTypeDeclarations
} = require("./dynamicTypes/jswFiles");

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
        ...getJswTypeDeclarations(),
        ...getPageElementsTypeDeclarations(elementsMap),
        ...getWidgetsTypeDeclarations(widgets),
        ...getNpmDependenciesTypesDeclarations(dependencies)
      ];
    },
    backend: ({ dependencies }) => {
      return [
        ...fullCorvidTypes.BASE,
        ...fullCorvidTypes.BACKEND,
        ...getJswTypeDeclarations(),
        ...getNpmDependenciesTypesDeclarations(dependencies)
      ];
    },
    public: ({ dependencies }) => {
      return [
        ...fullCorvidTypes.BASE,
        ...fullCorvidTypes.PUBLIC,
        ...getJswTypeDeclarations(),
        ...getNpmDependenciesTypesDeclarations(dependencies)
      ];
    }
  },
  getWixModulesList: () => wixModulesNames,
  getWidgetTypeDeclarations: getWidgetDeclaration,
  getPageElementsTypeDeclarations: getPageElementsRawDeclarations,
  getAmbientModuleDeclaration,
  getJswTypeDeclaration: getJswRawDeclaration
};
