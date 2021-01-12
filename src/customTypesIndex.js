const fullCorvidTypes = require("../customTypes/dist/fullCorvidTypes.json");
const wixModulesNames = require("../customTypes/dist/wixModules.json");

const corvidTypes = require("./main");
module.exports = corvidTypes(fullCorvidTypes, wixModulesNames);
