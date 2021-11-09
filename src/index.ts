/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import fullCorvidTypes from "../fullCorvidTypes.json";
import wixModulesNames from "../wixModules.json";
import eventHandlersService from "./dynamicTypes/eventHandlersService";
import { TS_CONFIG_PATHS } from "./constants";
import dynamicTypings from "./dynamicTypes";
import axios from "axios";

export * from "./dynamicTypes/eventHandlersService";
let lib: any;
const initLib = async () => {
  return import("../corvidTypesLib.json").then(
    ({ default: _lib }) => (lib = _lib)
  );
};

module.exports = {
  configPaths: {
    page: `corvid-types/${TS_CONFIG_PATHS.PAGES}`,
    backend: `corvid-types/${TS_CONFIG_PATHS.BACKEND}`,
    public: `corvid-types/${TS_CONFIG_PATHS.PUBLIC}`
  },
  declarations: {
    page: async (
      { dependencies, elementsMap, widgets }: any = {},
      autocompleteUrlOverride: any
    ) => {
      if (!lib) {
        await initLib();
      }
      const moduleToOverride = autocompleteUrlOverride
        ? autocompleteUrlOverride.split("~")
        : [];
      const pagesLibs = await Promise.all(
        (fullCorvidTypes as any).PAGES.map(async (path: string) => {
          let l = lib[path];
          if (path.includes(moduleToOverride[0])) {
            console.log("trying to fetch => ", moduleToOverride[1]);
            l = ((await axios.get(moduleToOverride[1])) as any).data;
          }
          return {
            path,
            content: l
          };
        })
      );
      return [
        ...pagesLibs,
        ...dynamicTypings.elementsMap.getFiles(elementsMap),
        ...dynamicTypings.widget.getFiles(widgets),
        ...dynamicTypings.packages.getFiles(dependencies)
      ];
    },
    backend: async ({ dependencies }: any, autocompleteUrlOverride: any) => {
      if (!lib) {
        await initLib();
      }
      const moduleToOverride = autocompleteUrlOverride
        ? autocompleteUrlOverride.split("~")
        : [];
      const backendLibs = await Promise.all(
        (fullCorvidTypes as any).BACKEND.map(async (path: string) => {
          let l = lib[path];
          if (path.includes(moduleToOverride[0])) {
            console.log("trying to fetch => ", moduleToOverride[1]);
            l = ((await axios.get(moduleToOverride[1])) as any).data;
          }
          return {
            path,
            content: l
          };
        })
      );
      return [
        ...backendLibs,
        ...dynamicTypings.packages.getFiles(dependencies)
      ];
    },
    public: async ({ dependencies }: any, autocompleteUrlOverride: any) => {
      if (!lib) {
        await initLib();
      }
      const moduleToOverride = autocompleteUrlOverride
        ? autocompleteUrlOverride.split("~")
        : [];
      const publicLibs = await Promise.all(
        (fullCorvidTypes as any).PUBLIC.map(async (path: string) => {
          let l = lib[path];
          if (path.includes(moduleToOverride[0])) {
            console.log("trying to fetch => ", moduleToOverride[1]);
            l = ((await axios.get(moduleToOverride[1])) as any).data;
          }
          return {
            path,
            content: l
          };
        })
      );
      return [...publicLibs, ...dynamicTypings.packages.getFiles(dependencies)];
    }
  },
  getWixModulesList: () => wixModulesNames,
  eventHandlersService,
  // Methods for Corvid-local (CLI)
  getWidgetTypeDeclarations: dynamicTypings.widget.getRaw,
  getPageElementsTypeDeclarations: dynamicTypings.elementsMap.getRaw,
  getPackageTypeDecelerations: dynamicTypings.packages.getRaw
};
