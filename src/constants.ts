const TARGET_ES_LIB = "ES2020";
const WEB_WORKER_LIB = "WebWorker";

export default {
  TS_CONFIG_PATHS: {
    BACKEND: "configs/tsconfig.backend.json",
    PUBLIC: "configs/tsconfig.public.json",
    PAGES: "configs/tsconfig.pages.json"
  },
  NO_LIB_TS_CONFIG_PATHS: {
    BACKEND: "configs/no-lib/tsconfig.backend.json",
    PUBLIC: "configs/no-lib/tsconfig.public.json",
    PAGES: "configs/no-lib/tsconfig.pages.json",
    TARGET_ES: "configs/no-lib/tsconfig.target_es.json",
    WEB_WORKER: "configs/no-lib/tsconfig.webworker.json"
  },
  NO_LIB_TS_CONFIG_PATHS_DEPRECATED: {
    BACKEND: "configs/no-lib/deprecated/tsconfig.backend.json",
    PUBLIC: "configs/no-lib/deprecated/tsconfig.public.json",
    PAGES: "configs/no-lib/deprecated/tsconfig.pages.json",
    TARGET_ES: "configs/no-lib/tsconfig.target_es.json",
    WEB_WORKER: "configs/no-lib/tsconfig.webworker.json"
  },
  BASE_LIBS: {
    BACKEND: [TARGET_ES_LIB],
    PUBLIC: [TARGET_ES_LIB, WEB_WORKER_LIB],
    PAGES: [TARGET_ES_LIB, WEB_WORKER_LIB]
  },
  TS_CONFIG_BASE_PATH: "configs/tsconfig.base.json"
};
