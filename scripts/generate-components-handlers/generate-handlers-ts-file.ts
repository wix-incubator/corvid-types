import path from "path";
import fs from "fs";
import * as ts from "typescript";
import { generateComponentsHandlers } from "./generate-components-handlers";

const DECLARATION_PATH = path.join("types/common", "declaration.d.ts");
const OUTPUT_FILENAME = "components-handlers.ts";
const COMPONENTS_EVENTS_PATH = path.join("src/dynamicTypes", OUTPUT_FILENAME);
const IMPORT_HANDLERS_TYPES_PATH =
  "../../scripts/generate-components-handlers/generate-components-handlers";

const createComponentsHandlersTSFile = (): void => {
  const importDeclaration = createTypeImportDeclaration();
  const variableStatement = createComponentsHandlersVariable();
  const exportDeclaration = createExportDeclaration();

  const outputFile = ts.factory.createSourceFile(
    [importDeclaration, variableStatement, exportDeclaration],
    ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
    ts.NodeFlags.JavaScriptFile
  );

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const result = printer.printFile(outputFile);
  fs.writeFileSync(COMPONENTS_EVENTS_PATH, result);
};

const createTypeImportDeclaration = () => {
  const importSpecifier = ts.factory.createImportSpecifier(
    undefined,
    ts.factory.createIdentifier("ComponentDefinitionsMap")
  );
  const namedImports = ts.factory.createNamedImports([importSpecifier]);
  const importClause = ts.factory.createImportClause(
    false,
    undefined,
    namedImports
  );
  const importDeclaration = ts.factory.createImportDeclaration(
    undefined,
    undefined,
    importClause,
    ts.factory.createStringLiteral(IMPORT_HANDLERS_TYPES_PATH)
  );
  return importDeclaration;
};

const createComponentsHandlersVariable = () => {
  const componentsHandlers = generateComponentsHandlers(DECLARATION_PATH);
  const handlersSourceFile = ts.parseJsonText(
    "handlers.ts",
    JSON.stringify(componentsHandlers)
  );

  const statements = handlersSourceFile.statements;
  if (statements.length === 0 || !statements[0]) {
    throw new Error("No statements in the computed components handlers");
  }

  const variableDeclaration = ts.factory.createVariableDeclaration(
    "ComponentsHandlers",
    undefined,
    ts.factory.createTypeReferenceNode("ComponentDefinitionsMap"),
    statements[0].expression
  );
  const variableStatement = ts.factory.createVariableStatement(
    undefined,
    ts.factory.createVariableDeclarationList(
      [variableDeclaration],
      ts.NodeFlags.Const
    )
  );
  return variableStatement;
};

const createExportDeclaration = () => {
  return ts.factory.createExportDefault(
    ts.factory.createIdentifier("ComponentsHandlers")
  );
};

if (require.main === module) {
  createComponentsHandlersTSFile();
}

export default createComponentsHandlersTSFile;
