export enum LibCollections {
  BACKEND = "BACKEND",
  PUBLIC = "PUBLIC",
  PAGES = "PAGES",
  TARGET_ES = "TARGET_ES",
  WEB_WORKER = "WEB_WORKER"
}

type Lib = {
  path: string;
  content: string;
};

type FullCorvidTypes = {
  contexts: Record<LibCollections, string[]>;
  libs: Array<Lib>;
};

const dynamicallyImportFullCorvidTypes = async (): Promise<{
  default: FullCorvidTypes;
}> => {
  return import(
    /* webpackChunkName: "fullCorvidTypesJSON" */ "../../dist/fullCorvidTypes.json"
  );
};

const dynamicallyImportFullCorvidTypesDeprecated = async (): Promise<{
  default: FullCorvidTypes;
}> => {
  return import(
    /* webpackChunkName: "fullCorvidTypesJSON.deprecated" */ "../../dist/fullCorvidTypes.deprecated.json"
  );
};

export const getCollectionLibs = async (
  key: LibCollections,
  multipleFiles: boolean
): Promise<Lib[]> => {
  const fullCorvidTypesModule = multipleFiles
    ? await dynamicallyImportFullCorvidTypes()
    : await dynamicallyImportFullCorvidTypesDeprecated();
  const fullCorvidTypes = fullCorvidTypesModule.default;

  return fullCorvidTypes.contexts[key]
    .map(libPath => {
      return fullCorvidTypes.libs.find(lib => libPath.includes(lib.path));
    })
    .filter((lib): lib is Lib => lib !== undefined);
};
