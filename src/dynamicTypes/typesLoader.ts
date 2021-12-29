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

export const getCollectionLibs = async (
  key: LibCollections
): Promise<Lib[]> => {
  const fullCorvidTypesModule = await import(
    /* webpackChunkName: "fullCorvidTypesJson" */ "../../dist/fullCorvidTypes.json"
  );
  const fullCorvidTypes: FullCorvidTypes = fullCorvidTypesModule.default;

  return fullCorvidTypes.contexts[key]
    .map(libPath => {
      return fullCorvidTypes.libs.find(lib => libPath.includes(lib.path));
    })
    .filter((lib): lib is Lib => lib !== undefined);
};
