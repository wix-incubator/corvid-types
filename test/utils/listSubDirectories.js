const { readdirSync } = require("fs");
const path = require("path");

module.exports = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(source, dirent.name));
