const fullCorvidTypes = require("../fullCorvidTypes.json");

const { getWidgetTypeDeclarations } = require("./widget");
const getPageElementsTypeDeclarations = elementsMap =>
  "type PageElementsMap = {\n" +
  Object.keys(elementsMap)
    .map(nickname => `  "#${nickname}": ${elementsMap[nickname]};\n`)
    .join("") +
  "}";

const getDynamicTypes = ({ elementsMap, widgets }) => {
  const dynamicTypes = [];
  if (elementsMap) {
    dynamicTypes.push({
      path: "/elementsMap.d.ts",
      content: getPageElementsTypeDeclarations(elementsMap)
    });
  }
  if (widgets && widgets.length) {
    widgets.forEach((manifest, index) => {
      dynamicTypes.push({
        path: `/widgets${index}.d.ts`,
        content: getWidgetTypeDeclarations(manifest)
      });
    });
  }
  return dynamicTypes;
};

module.exports = {
  configPaths: {
    page: "corvid-types/configs/tsconfig.pages.json",
    backend: "corvid-types/configs/tsconfig.backend.json",
    public: "corvid-types/configs/tsconfig.public.json"
  },
  declarations: {
    page: ({ elementsMap, widgets } = {}) => {
      return [
        ...fullCorvidTypes.BASE,
        ...fullCorvidTypes.PAGES,
        ...getDynamicTypes({
          elementsMap,
          widgets
        })
      ];
    },
    backend: () => {
      return [...fullCorvidTypes.BASE, ...fullCorvidTypes.BACKEND];
    },
    public: () => {
      return [...fullCorvidTypes.BASE, ...fullCorvidTypes.PUBLIC];
    }
  },
  getWidgetTypeDeclarations,
  getPageElementsTypeDeclarations
};
