import path from "path";
import fs from "fs";
import Constants from "../constants";
import getEventsHandlersService from "./event-handlers-generator";

const OUTPUT_PATH = path.join(
  __dirname,
  "../../dist/",
  Constants.EVENT_HANDLERS_JSON_FILENAME
);
const DECLARATIONS_DTS_PATH = path.join(
  __dirname,
  "../../",
  Constants.DECLARATIONS_DTS_ROOT_PATH
);

const generatedEvents = getEventsHandlersService().generate(
  DECLARATIONS_DTS_PATH
);
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(generatedEvents));
