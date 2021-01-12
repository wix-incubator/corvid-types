const fullCorvidTypes = require("../dist/fullCorvidTypes.json");
const wixModulesNames = require("../dist/wixModules.json");

const corvidTypes = require("./main");
module.exports = corvidTypes(fullCorvidTypes, wixModulesNames);
