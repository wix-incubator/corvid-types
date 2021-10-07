import path from "path";

const DECLARATIONS_DTS_FILENAME = "declaration.d.ts";
const DECLARATIONS_DTS_ROOT_PATH = path.join(
  "types/common/",
  DECLARATIONS_DTS_FILENAME
);
const EVENT_HANDLERS_JSON_FILENAME = "eventHandlers.json";
const $w_MODULE_NAME = "$w";

export default {
  DECLARATIONS_DTS_FILENAME,
  DECLARATIONS_DTS_ROOT_PATH,
  EVENT_HANDLERS_JSON_FILENAME,
  $w_MODULE_NAME
};
