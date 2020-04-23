const fs = require("fs");
const path = require("path");

const prepareEmptyTypescriptProgram = ({ workingFolder, configPath }) => {
  const corvidDir = path.join(__dirname, "../");

  const tmpConfigPath = `${workingFolder}/tsconfig.json`;
  const tmpConfigContent = `{"extends": "${path.resolve(
    corvidDir,
    configPath
  )}"}`;

  fs.writeFileSync(tmpConfigPath, tmpConfigContent);
  fs.writeFileSync(`${workingFolder}/empty.js`, "");

  return tmpConfigPath;
};

module.exports = {
  prepareEmptyTypescriptProgram
};
