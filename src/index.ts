/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
import wixModulesNames from "../dist/wixModules.json";
import eventHandlersService from "./dynamicTypes/eventHandlersService";
import Constants from "./constants";
import {
  packagesDeclarations,
  elementsMapDeclarations,
  widgetDeclarations,
  typesLoader
} from "./dynamicTypes";
const { TS_CONFIG_PATHS, BASE_LIBS } = Constants;
const { getCollectionLibs, LibCollections } = typesLoader;
export * from "./dynamicTypes/eventHandlersService";

export default {
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
    page: async ({
      includeBaseLibs = true,
      multipleFiles = false,
      dependencies,
      elementsMap,
      widgets
    }: any = {}) => {
      const baseLibs = includeBaseLibs
        ? [
            ...(await getCollectionLibs(
              LibCollections.TARGET_ES,
              multipleFiles
            )),
            ...(await getCollectionLibs(
              LibCollections.WEB_WORKER,
              multipleFiles
            ))
          ]
        : [];
      return [
        ...baseLibs,
        ...(await getCollectionLibs(LibCollections.PAGES, multipleFiles)),
        ...elementsMapDeclarations.getFiles(elementsMap),
        ...widgetDeclarations.getFiles(widgets),
        ...(await packagesDeclarations.getFiles(dependencies))
      ];
    },
    backend: async ({
      includeBaseLibs = true,
      multipleFiles = false,
      dependencies
    }: any) => {
      const baseLibs = includeBaseLibs
        ? await getCollectionLibs(LibCollections.TARGET_ES, multipleFiles)
        : [];
      return [
        ...baseLibs,
        ...(await getCollectionLibs(LibCollections.BACKEND, multipleFiles)),
        ...(await packagesDeclarations.getFiles(dependencies))
      ];
    },
    public: async ({
      includeBaseLibs = true,
      multipleFiles = false,
      dependencies
    }: any) => {
      const baseLibs = includeBaseLibs
        ? [
            ...(await getCollectionLibs(
              LibCollections.TARGET_ES,
              multipleFiles
            )),
            ...(await getCollectionLibs(
              LibCollections.WEB_WORKER,
              multipleFiles
            ))
          ]
        : [];
      return [
        ...baseLibs,
        ...(await getCollectionLibs(LibCollections.PUBLIC, multipleFiles)),
        ...(await packagesDeclarations.getFiles(dependencies))
      ];
    }
  },
  getWixModulesList: () => wixModulesNames,
  eventHandlersService,
  // Methods for Corvid-local (CLI)
  getWidgetTypeDeclarations: widgetDeclarations.getRaw,
  getPageElementsTypeDeclarations: elementsMapDeclarations.getRaw,
  getPackageTypeDecelerations: packagesDeclarations.getRaw
};
