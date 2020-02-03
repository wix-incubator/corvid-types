#!/usr/bin/env node
const ts = require("typescript");

const host = ts.sys;
const parsedCmd = ts.getParsedCommandLineOfConfigFile(
  "/Users/karinag/Projects/corvid-types/scripts/public/tsconfig.json",
  undefined,
  host
);

const { options, fileNames } = parsedCmd;

const program = ts.createProgram({
  rootNames: fileNames,
  options
});

const sourceFiles = program
  .getSourceFiles()
  .filter(file => file.isDeclarationFile);
// const a = sourceFiles.map(file => ({isDeclarationFile: file.isDeclarationFile, referencedFiles: file.referencedFiles, typeReferenceDirectives: file.typeReferenceDirectives, resolvedPath: file.resolvedPath}))
sourceFiles.map(file => console.log(file.resolvedPath, file.referencedFiles));
