#!/usr/bin/env node
const fs = require("fs");
const { readFromDir } = require("docworks-repo");
const $wDeclarationBuilder = require("./selector-declaration-builder");

async function generate$wdtsFile(corvidDocsPath, $wDtsFilePath) {
  console.log(`reading docs from local source ${corvidDocsPath}`);
  const repo = await readFromDir(corvidDocsPath);

  const $wDeclarationContent = await $wDeclarationBuilder(repo.services);

  fs.writeFileSync($wDtsFilePath, $wDeclarationContent);
  console.log(`selector dts saved to file ${$wDtsFilePath}`);
}

module.exports = generate$wdtsFile;
