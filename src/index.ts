/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import fullCorvidTypes from "../dist/fullCorvidTypes.json";
import wixModulesNames from "../dist/wixModules.json";
import eventHandlersService from "./dynamicTypes/eventHandlersService";
import { TS_CONFIG_PATHS, BASE_LIBS } from "./constants";
import dynamicTypings from "./dynamicTypes";

export * from "./dynamicTypes/eventHandlersService";

module.exports = {
  configPaths: {
    page: `corvid-types/${TS_CONFIG_PATHS.PAGES}`,
    backend: `corvid-types/${TS_CONFIG_PATHS.BACKEND}`,
    public: `corvid-types/${TS_CONFIG_PATHS.PUBLIC}`
  },
  baseLibs: {
    page: BASE_LIBS.PAGES,
    backend: BASE_LIBS.BACKEND,
    public: BASE_LIBS.PUBLIC
  },
  declarations: {
    page: ({
      includeBaseLibs = true,
      dependencies,
      elementsMap,
      widgets
    }: any = {}) => {
      const baseLibs = includeBaseLibs
        ? [
            ...(fullCorvidTypes as any).TARGET_ES,
            ...(fullCorvidTypes as any).WEB_WORKER
          ]
        : [];
      return [
        ...baseLibs,
        ...(fullCorvidTypes as any).PAGES,
        ...dynamicTypings.elementsMap.getFiles(elementsMap),
        ...dynamicTypings.widget.getFiles(widgets),
        ...dynamicTypings.packages.getFiles(dependencies)
      ];
    },
    backend: ({ includeBaseLibs = true, dependencies }: any) => {
      const baseLibs = includeBaseLibs
        ? [...(fullCorvidTypes as any).TARGET_ES]
        : [];
      return [
        ...baseLibs,
        ...(fullCorvidTypes as any).BACKEND,
        ...dynamicTypings.packages.getFiles(dependencies)
      ];
    },
    public: ({ includeBaseLibs = true, dependencies }: any) => {
      const baseLibs = includeBaseLibs
        ? [
            ...(fullCorvidTypes as any).TARGET_ES,
            ...(fullCorvidTypes as any).WEB_WORKER
          ]
        : [];
      return [
        ...baseLibs,
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
