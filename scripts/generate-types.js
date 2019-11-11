#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const $wGenerator = require("./selector-declaration-generator");
const { spawnSync } = require("child_process");

const TEMP_DOCS_PATH = "corvid_docs";
const WIX_CODE_DOCS_REMOTE = "https://github.com/wix/wix-code-docs.git";
const DECLARATION_FILE_NAME = "declaration";
const DECLARATION_FULL_FILE_NAME = "$w.d.ts";
const ORIGINAL_TYPES_PATH = "src_types";
const DEST_TYPES_PATH = "types";
const TYPES_COMMON_PATH = path.join(DEST_TYPES_PATH, "common");
const TYPES_PAGES_PATH = path.join(DEST_TYPES_PATH, "pages");

async function generateDeclarations() {
  fs.removeSync(TEMP_DOCS_PATH);
  fs.removeSync(DEST_TYPES_PATH);

  fs.copySync(ORIGINAL_TYPES_PATH, DEST_TYPES_PATH);

  spawnSync("git", ["clone", WIX_CODE_DOCS_REMOTE, TEMP_DOCS_PATH], {
    stdio: "inherit"
  });

  spawnSync(
    "docworks",
    [
      "dts",
      "--local",
      TEMP_DOCS_PATH,
      "--out",
      DECLARATION_FILE_NAME,
      "--dir",
      TYPES_COMMON_PATH,
      "--wixselector"
    ],
    {
      stdio: "inherit"
    }
  );

  await $wGenerator(
    TEMP_DOCS_PATH,
    path.join(TYPES_PAGES_PATH, DECLARATION_FULL_FILE_NAME)
  );

  fs.removeSync(TEMP_DOCS_PATH);
}

generateDeclarations();
