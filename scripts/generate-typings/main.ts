#!/usr/bin/env node
import tmp from "tmp";
import fs from "fs-extra";
import path from "path";
import $wGenerator from "./selector-declaration-generator";
import { spawnSync } from "child_process";
import Constants from "../constants";

const WIX_CODE_DOCS_REMOTE = "https://github.com/wix/wix-code-docs.git";
const WIX_CODE_DOCS_API_URL = "https://www.wix.com/corvid/reference";
const WIX_CODE_DOCS_TEMPLATE = `<%= model.summary %>\n\t[Read more](${WIX_CODE_DOCS_API_URL}/<%= model.service %>.html#<%= model.member %>)<%  if (model.eventType) { %> \n <% print("@eventType " + model.eventType); } %>`;
const DOCS_BRANCH = process.env.DOCS_BRANCH;

const removeDtsExtention = (filename: string): string =>
  filename.replace(".d.ts", "");

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

const runDocworks = (localDocsRepoPath: string, multipleFiles = false) => {
  const mainDeclarationFile = multipleFiles
    ? Constants.DECLARATIONS_DTS_FILENAME
    : Constants.DECLARATIONS_DTS_FILENAME_DEPRECATED;
  const docworksDtsOptions = [
    "dts",
    "--local",
    localDocsRepoPath,
    "--out",
    removeDtsExtention(mainDeclarationFile),
    "--dir",
    Constants.TYPES_COMMON_PATH,
    "--wixselector",
    "--summaryTemplate",
    WIX_CODE_DOCS_TEMPLATE
  ];

  if (multipleFiles) {
    docworksDtsOptions.push("--multipleFiles");
  }

  spawnSync("docworks", docworksDtsOptions, {
    stdio: "inherit"
  });
};

const generateDeclarations = async (): Promise<void> => {
  const localDocsRepoPath = process.env.LOCAL_DOCS_REPO_PATH || cloneDocsRepo();

  fs.removeSync(Constants.DEST_TYPES_FOLDER);
  fs.copySync(Constants.SRC_TYPES_FOLDER, Constants.DEST_TYPES_FOLDER);

  runDocworks(localDocsRepoPath);
  runDocworks(localDocsRepoPath, true);

  await $wGenerator(
    localDocsRepoPath,
    path.join(
      Constants.TYPES_PAGES_PATH,
      Constants.$W_DECLARATION_FULL_FILENAME
    )
  );
};

generateDeclarations();
