#!/usr/bin/env node
const tmp = require("tmp");
const ts = require("typescript");
const { TS_CONFIG_PATHS } = require("../src/constants");
const { prepareEmptyTypescriptProgram } = require("./utils");

const generateEventsMap = () => {
  const host = ts.sys;
  const tempFolder = tmp.dirSync();

  const tmpConfigPath = prepareEmptyTypescriptProgram({
    workingFolder: tempFolder.name,
    configPath: TS_CONFIG_PATHS["PAGES"]
  });

  const parsedCmd = ts.getParsedCommandLineOfConfigFile(
    tmpConfigPath,
    undefined,
    host
  );

  const { options, fileNames } = parsedCmd;

  const program = ts.createProgram({
    rootNames: fileNames,
    options
  });

  const $wDeclarationDtsNode = program
    .getSourceFiles()
    .find(
      ({ isDeclarationFile, fileName }) =>
        isDeclarationFile && fileName.includes("declaration.d.ts")
    );

  const checker = program.getTypeChecker();
  serialize(checker, $wDeclarationDtsNode);
};

function serialize(checker, rootNode) {
  ts.forEachChild(rootNode, visit);

  function visit(node) {
    if (ts.isModuleDeclaration(node) && node.name.text === "$w") {
      // This is the $w namespace, visit its children
      serialize$wNamespace(node);
    }
  }

  function serialize$wNamespace(node) {
    const output = [];
    ts.forEachChild(node, visit$wDescendants);

    function visit$wDescendants(node) {
      if (ts.isInterfaceDeclaration(node)) {
        let symbol = checker.getSymbolAtLocation(node);
        if (symbol) {
          serializeSymbol(symbol);
        }
        output.push(node.name.text);
      }

      ts.forEachChild(node, visit$wDescendants);
    }
  }

  /** Serialize a symbol into a json object */
  function serializeSymbol(symbol) {
    return {
      name: symbol.getName(),
      documentation: ts.displayPartsToString(
        symbol.getDocumentationComment(checker)
      ),
      type: checker.typeToString(
        checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration)
      )
    };
  }

  /** Serialize a signature (call or construct) */
  function serializeSignature(signature) {
    return {
      parameters: signature.parameters.map(serializeSymbol),
      returnType: checker.typeToString(signature.getReturnType()),
      documentation: ts.displayPartsToString(
        signature.getDocumentationComment(checker)
      )
    };
  }
}

generateEventsMap();
