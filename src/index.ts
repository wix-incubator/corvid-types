/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import fullCorvidTypes from "../dist/fullCorvidTypes.json";
import wixModulesNames from "../dist/wixModules.json";
import eventHandlersService from "./dynamicTypes/eventHandlersService";
import { TS_CONFIG_PATHS } from "./constants";
import dynamicTypings from "./dynamicTypes";

export * from "./dynamicTypes/eventHandlersService";

module.exports = {
  configPaths: {
    page: `corvid-types/${TS_CONFIG_PATHS.PAGES}`,
    backend: `corvid-types/${TS_CONFIG_PATHS.BACKEND}`,
    public: `corvid-types/${TS_CONFIG_PATHS.PUBLIC}`
  },
  declarations: {
    page: ({ dependencies, elementsMap, widgets }: any = {}) => {
      return [
        // ...(fullCorvidTypes as any).BASE,
        ...(fullCorvidTypes as any).PAGES,
        ...dynamicTypings.elementsMap.getFiles(elementsMap),
        ...dynamicTypings.widget.getFiles(widgets),
        ...dynamicTypings.packages.getFiles(dependencies)
      ];
    },
    backend: ({ dependencies }: any) => {
      return [
        // ...(fullCorvidTypes as any).BASE,
        ...(fullCorvidTypes as any).BACKEND,
        ...dynamicTypings.packages.getFiles(dependencies)
      ];
    },
    public: ({ dependencies }: any) => {
      return [
        // ...(fullCorvidTypes as any).BASE,
        ...(fullCorvidTypes as any).PUBLIC,
        ...dynamicTypings.packages.getFiles(dependencies)
      ];
    }
  },
  getWixModulesList: () => wixModulesNames,
  eventHandlersService,
  // Methods for Corvid-local (CLI)
  getWidgetTypeDeclarations: dynamicTypings.widget.getRaw,
  getPageElementsTypeDeclarations: dynamicTypings.elementsMap.getRaw,
  getPackageTypeDecelerations: dynamicTypings.packages.getRaw
};
