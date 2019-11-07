#!/usr/bin/env node
const fs = require("fs");
const { readFromDir } = require("docworks-repo");
const $wDeclarationBuilder = require("./selector-declaration-builder");

async function generate$wdtsFile() {
  const corvidDocsPath = "corvid_docs";
  console.log(`reading docs from local source ${corvidDocsPath}`);
  const repo = await readFromDir(corvidDocsPath);
  const tripleSlashDirectivePath = "../common/utilityTypes.d.ts";

  const $wDeclarationContent = await $wDeclarationBuilder(
    repo.services,
    tripleSlashDirectivePath
  );

  const $wDtsFilePath = "types/common/$w.d.ts";
  fs.writeFileSync($wDtsFilePath, $wDeclarationContent);
  console.log(`selector dts saved to file ${$wDtsFilePath}`);
}

generate$wdtsFile();
