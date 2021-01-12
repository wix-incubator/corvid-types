const { TS_CONFIG_PATHS } = require("./constants");
const dynamicTypings = require("./dynamicTypes");

const commonDynamicTypings = [
  ...dynamicTypings.jsw.getFiles(),
  ...dynamicTypings.json.getFiles()
];

module.exports = (fullCorvidTypes, wixModulesNames) => ({
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
        ...commonDynamicTypings,
        ...dynamicTypings.elementsMap.getFiles(elementsMap),
        ...dynamicTypings.widget.getFiles(widgets),
        ...dynamicTypings.packages.getFiles(dependencies)
      ];
    },
    backend: ({ dependencies }) => {
      return [
        ...fullCorvidTypes.BASE,
        ...fullCorvidTypes.BACKEND,
        ...commonDynamicTypings,
        ...dynamicTypings.packages.getFiles(dependencies)
      ];
    },
    public: ({ dependencies }) => {
      return [
        ...fullCorvidTypes.BASE,
        ...fullCorvidTypes.PUBLIC,
        ...commonDynamicTypings,
        ...dynamicTypings.packages.getFiles(dependencies)
      ];
    }
  },
  getWixModulesList: () => wixModulesNames,
  // Methods for Corvid-local (CLI)
  getWidgetTypeDeclarations: dynamicTypings.widget.getRaw,
  getPageElementsTypeDeclarations: dynamicTypings.elementsMap.getRaw,
  getPackageTypeDecelerations: dynamicTypings.packages.getRaw,
  getJswTypeDeclarations: dynamicTypings.jsw.getRaw
});
