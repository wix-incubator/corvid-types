const ts = require("typescript");

const filterJSFiles = fullPath => fullPath.endsWith("js");
const getFileName = fullPath => fullPath.replace(/^.*[\\/]/, "");
module.exports = function compiler(configFilePath) {
  const compilerErrors = [];
  const host = ts.sys;
  const parsedCmd = ts.getParsedCommandLineOfConfigFile(
    configFilePath,
    undefined,
    host
  );

  const { options, fileNames } = parsedCmd;

  const program = ts.createProgram({
    rootNames: fileNames,
    options
  });
  const jsFiles = fileNames.filter(filterJSFiles);
  if (jsFiles.length === 0) throw new Error("No JS files to compile");

  const emitResult = program.emit(undefined, undefined, undefined, undefined, {
    before: [],
    after: [],
    afterDeclarations: []
  });
  ts.getPreEmitDiagnostics(program)
    .concat(emitResult.diagnostics)
    .forEach(diagnostic => {
      let msg = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
      if (diagnostic.file) {
        const {
          line,
          character
        } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
        msg = `${getFileName(diagnostic.file.fileName)} (${line +
          1},${character + 1}): ${msg}`;
      }
      compilerErrors.push(msg);
    });

  if (compilerErrors.length > 0) throw new Error(compilerErrors.toString());
};
