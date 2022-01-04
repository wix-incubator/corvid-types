import fs from "fs";
import $wDeclarationBuilder from "./selector-declaration-builder";
// eslint-disable-next-line
const docworksRepo = require("docworks-repo");

const generate$wdtsFile = async (
  corvidDocsPath: string,
  $wDtsFilePath: string
): Promise<void> => {
  console.log(`reading docs from local source ${corvidDocsPath}`);
  const repo = await docworksRepo.readFromDir(corvidDocsPath);

  const $wDeclarationContent = await $wDeclarationBuilder(repo.services);

  fs.writeFileSync($wDtsFilePath, $wDeclarationContent);
  console.log(`selector dts saved to file ${$wDtsFilePath}`);
};

export default generate$wdtsFile;
