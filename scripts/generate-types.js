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
const CUSTOM_FILES_PATH = "customTypes";

// Remove this and corresponding if's when we have wix-data autocomplete working
const WITH_CUSTOM = !!process.env.CUSTOM_SERVICES;

const cloneDocsRepo = () => {
  const tmpDir = tmp.dirSync();
  spawnSync("git", ["clone", WIX_CODE_DOCS_REMOTE, tmpDir.name], {
    stdio: "inherit"
  });
  return tmpDir.name;
};

const streamFileToStream = (appendStream, readPath) => {
  const readStream = fs.createReadStream(readPath);
  readStream.pipe(appendStream);

  return new Promise((resolve, reject) => {
    appendStream.on("end", () => resolve(appendStream));
    appendStream.on("error", error => reject(error));
    readStream.on("error", error => reject(error));
  });
};

async function generateDeclarations() {
  const localDocsRepoPath = process.env.LOCAL_DOCS_REPO_PATH || cloneDocsRepo();

  fs.removeSync(DEST_TYPES_PATH);
  fs.copySync(ORIGINAL_TYPES_PATH, DEST_TYPES_PATH);

  const dockworksParams = [
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
  ];

  let customFiles = [];
  if (WITH_CUSTOM) {
    customFiles = await fs.readdir(CUSTOM_FILES_PATH);
    customFiles.forEach(filename => {
      dockworksParams.push("--ignore");
      dockworksParams.push(filename.replace(".d.ts", ""));
    });
  }

  spawnSync("docworks", dockworksParams, {
    stdio: "inherit"
  });

  await $wGenerator(
    localDocsRepoPath,
    path.join(TYPES_PAGES_PATH, DECLARATION_FULL_FILE_NAME)
  );

  if (!WITH_CUSTOM) return;

  // flag: a is for append
  const writeStream = fs.createWriteStream(
    `${TYPES_COMMON_PATH}/${DECLARATION_FILE_NAME}.d.ts`,
    { flags: "a" }
  );
  // Chain promises streaming files one by one
  await customFiles.reduce(
    (promiseChain, filename) =>
      promiseChain.then(stream =>
        streamFileToStream(stream, `${CUSTOM_FILES_PATH}/${filename}`)
      ),
    Promise.resolve(writeStream)
  );
  writeStream.end();
}

generateDeclarations();
