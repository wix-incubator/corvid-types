const path = require("path");
const ts = require("typescript");
const fs = require("fs-extra");

const PROJECT_ROOT_PATH = path.join(__dirname, "../");
const EVENTS_FILE_PATH = path.join(PROJECT_ROOT_PATH, "dist", "$wEvents.json");
const DECLARATIONS_PATH = path.join(
  __dirname,
  "../types/common/declaration.d.ts"
);

const isBaseType$wNode = baseType => {
  const parentName = baseType.parent ? baseType.parent.getEscapedName() : null;
  return (
    ["Element", "Node"].includes(baseType.getEscapedName()) &&
    parentName === "$w"
  );
};

const doesInheritFrom$wNode = (typeChecker, node) => {
  const baseTypes = typeChecker
    .getBaseTypes(node)
    .map(baseType => baseType.getSymbol());
  return baseTypes.some(isBaseType$wNode);
};

function run() {
  const tsProgram = ts.createProgram([DECLARATIONS_PATH], {});
  const typeChecker = tsProgram.getTypeChecker();
  const sourceFile = tsProgram.getSourceFile(DECLARATIONS_PATH);

  fs.ensureFileSync(EVENTS_FILE_PATH);

  const $wNode = sourceFile.statements.find(
    statement =>
      ts.isModuleDeclaration(statement) && statement.name.escapedText === "$w"
  );

  $wNode.body.statements.forEach(statement => {
    if (
      ts.isInterfaceDeclaration(statement) &&
      doesInheritFrom$wNode(typeChecker, statement)
    ) {
      console.log(
        `\n${statement.name.escapedText}\n===============\n`,
        statement.members.map(member => member.name.escapedText).join(", ")
      );
    }
  });

  // const example =
  //   namespaceDeclarations[0].body.statements[0].heritageClauses[0];

  // fs.writeFileSync(EVENTS_FILE_PATH, JSON.stringify(sourceFile.statements));
}

if (!fs.existsSync(DECLARATIONS_PATH)) {
  throw new Error(`Cannot find the declaration file at [${DECLARATIONS_PATH}]`);
}

run();
