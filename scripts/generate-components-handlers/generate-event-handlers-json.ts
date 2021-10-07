import path from "path";
import fs from "fs";
import Constants from "../constants";
import generateComponentsEventHandlersFromDTS from "./event-handlers-generator";

const ROOT_DIR = "../../";

const OUTPUT_PATH = path.join(
  __dirname,
  ROOT_DIR,
  "dist/",
  Constants.EVENT_HANDLERS_JSON_FILENAME
);
const DECLARATIONS_DTS_PATH = path.join(
  __dirname,
  ROOT_DIR,
  Constants.DECLARATIONS_DTS_ROOT_PATH
);

const generatedEvents = generateComponentsEventHandlersFromDTS(
  DECLARATIONS_DTS_PATH
);
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(generatedEvents));
