#!/usr/bin/env node
import tmp from "tmp";
import fs from "fs-extra";
import path from "path";
import $wGenerator from "./selector-declaration-generator";
import { spawnSync } from "child_process";

const WIX_CODE_DOCS_REMOTE = "https://github.com/wix/wix-code-docs.git";
const WIX_CODE_DOCS_API_URL = "https://www.wix.com/corvid/reference";
const WIX_CODE_DOCS_TEMPLATE = `<%= model.summary %>\n\t[Read more](${WIX_CODE_DOCS_API_URL}/<%= model.service %>.html#<%= model.member %>)<%  if (model.eventType) { %> \n <% print("@eventType " + model.eventType); } %>`;
const DECLARATION_FILE_NAME = "declaration";
const DECLARATION_FULL_FILE_NAME = "$w.d.ts";
const ORIGINAL_TYPES_PATH = "src_types";
const DEST_TYPES_PATH = "types";
const TYPES_COMMON_PATH = path.join(DEST_TYPES_PATH, "common");
const TYPES_PAGES_PATH = path.join(DEST_TYPES_PATH, "pages");
const DOCS_BRANCH = process.env.DOCS_BRANCH;

const cloneDocsRepo = (): string => {
  const tmpDir = tmp.dirSync();
  const commandOptions = ["clone", WIX_CODE_DOCS_REMOTE, tmpDir.name];
  if (DOCS_BRANCH) {
    commandOptions.splice(1, 0, "--single-branch", "--branch", DOCS_BRANCH);
    console.info(`Building definitions based on ${DOCS_BRANCH} branch`);
  }
  spawnSync("git", commandOptions, {
    stdio: "inherit"
  });
  return tmpDir.name;
};

const generateDeclarations = async (): Promise<void> => {
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
};

generateDeclarations();
