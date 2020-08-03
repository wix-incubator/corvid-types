#!/usr/bin/env node
const tmp = require("tmp");
const fs = require("fs-extra");
const path = require("path");
const $wGenerator = require("./selector-declaration-generator");
const { spawnSync } = require("child_process");

const WIX_CODE_DOCS_REMOTE = "https://github.com/wix/wix-code-docs.git";
const WIX_CODE_DOCS_API_URL = "https://www.wix.com/corvid/reference";
const WIX_CODE_DOCS_TEMPLATE = `<%= model.summary %>\n\t[Read more](${WIX_CODE_DOCS_API_URL}/<%= model.service %>.html#<%= model.member %>)`;
const DECLARATION_FILE_NAME = "declaration";
const DECLARATION_FULL_FILE_NAME = "$w.d.ts";
const ORIGINAL_TYPES_PATH = "src_types";
const DEST_TYPES_PATH = "types";
const TYPES_COMMON_PATH = path.join(DEST_TYPES_PATH, "common");
const TYPES_PAGES_PATH = path.join(DEST_TYPES_PATH, "pages");

const cloneDocsRepo = () => {
  const tmpDir = tmp.dirSync();
  spawnSync("git", ["clone", WIX_CODE_DOCS_REMOTE, tmpDir.name], {
    stdio: "inherit"
  });
  return tmpDir.name;
};

async function generateDeclarations() {
  const localDocsRepoPath = process.env.LOCAL_DOCS_REPO_PATH || cloneDocsRepo();

  fs.removeSync(DEST_TYPES_PATH);
  fs.copySync(ORIGINAL_TYPES_PATH, DEST_TYPES_PATH);

  spawnSync(
    "docworks",
    [
      "dts",
      "--local",
      localDocsRepoPath,
      "--out",
      DECLARATION_FILE_NAME,
      "--dir",
      TYPES_COMMON_PATH,
      "--wixselector",
      "--summaryTemplate",
      WIX_CODE_DOCS_TEMPLATE
    ],
    {
      stdio: "inherit"
    }
  );

  await $wGenerator(
    localDocsRepoPath,
    path.join(TYPES_PAGES_PATH, DECLARATION_FULL_FILE_NAME)
  );
}

generateDeclarations();
