const fullCorvidTypes = require("../fullCorvidTypes.json");
const wixModulesNames = require("../wixModules.json");
const { TS_CONFIG_PATHS } = require("./constants");
const { getWidgetTypeDeclarations } = require("./widget");
const getPageElementsTypeDeclarations = elementsMap =>
  "type PageElementsMap = {\n" +
  Object.keys(elementsMap)
    .map(nickname => `  "#${nickname}": ${elementsMap[nickname]};\n`)
    .join("") +
  "}";

const getModuleTypeDeclaration = name => `declare module '${name}' {
  const m: any;
  export = m;
}`;

const getDynamicTypes = ({ elementsMap, widgets }) => {
  const dynamicTypes = [];
  if (elementsMap) {
    dynamicTypes.push({
      path: "/elementsMap.d.ts",
      content: getPageElementsTypeDeclarations(elementsMap)
    });
  }
  if (widgets && widgets.length) {
    widgets.forEach(({ name, events, members }) => {
      dynamicTypes.push({
        path: `/widgets/${name}.d.ts`,
        content: getWidgetTypeDeclarations({ name, events, members })
      });
    });
  }
  return dynamicTypes;
};

const getNpmDependenciesTypesDeclarations = (dependencies = {}) => {
  const dependenciesNames = Object.keys(dependencies);
  if (!dependenciesNames.length) return [];
  return dependenciesNames.map(packageName => ({
    path: `/dependencies/${packageName}.${dependencies[packageName]}.d.ts`,
    content: getModuleTypeDeclaration(packageName)
  }));
};

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
        ...getDynamicTypes({
          elementsMap,
          widgets
        }),
        ...getNpmDependenciesTypesDeclarations(dependencies)
      ];
    },
    backend: ({ dependencies }) => {
      return [
        ...fullCorvidTypes.BASE,
        ...fullCorvidTypes.BACKEND,
        ...getNpmDependenciesTypesDeclarations(dependencies)
      ];
    },
    public: ({ dependencies }) => {
      return [
        ...fullCorvidTypes.BASE,
        ...fullCorvidTypes.PUBLIC,
        ...getNpmDependenciesTypesDeclarations(dependencies)
      ];
    }
  },
  getWixModulesList: () => wixModulesNames,
  getWidgetTypeDeclarations,
  getPageElementsTypeDeclarations,
  getNpmDependenciesTypesDeclarations
};
