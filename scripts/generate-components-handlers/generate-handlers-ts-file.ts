import path from "path";
import fs from "fs";
import * as ts from "typescript";
import {
  generateComponentsHandlers,
  ComponentEventMethods
} from "./generate-components-handlers";

const DECLARATION_PATH = path.join("types/common", "declaration.d.ts");
const OUTPUT_FILENAME = "components-handlers.d.ts";
const COMPONENTS_EVENTS_PATH = path.join("src_types/common", OUTPUT_FILENAME);

const createComponentsHandlersDTSFile = (): void => {
  const outputFile = ts.factory.createSourceFile(
    [createEventHandlersModuleDeclaration()],
    ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
    ts.NodeFlags.Namespace
  );

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const result = printer.printFile(outputFile);
  fs.writeFileSync(COMPONENTS_EVENTS_PATH, result);
};

const createEventHandlersModuleDeclaration = (): ts.ModuleDeclaration => {
  const componentsEventHandlers = generateComponentsHandlers(DECLARATION_PATH);

  // const outputFile = ts.factory.createSourceFile(
  //   [],
  //   ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
  //   ts.NodeFlags.JavaScriptFile
  // );

  // const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  // const printedNodes = Object.values(componentsEventHandlers).map(
  //   componentEvents =>
  //     componentEvents.methods.map(
  //       method =>
  //         `${method.documentation}\n
  //   ${printer.printNode(ts.EmitHint.Unspecified, method.signature, outputFile)}`
  //     )
  // );

  const interfaceDeclarations = Object.values(componentsEventHandlers)
    .filter(component => component.methods.length > 0)
    .map(component => createComponentInterface(component));

  const moduleBlock = ts.factory.createModuleBlock(interfaceDeclarations);

  return ts.factory.createModuleDeclaration(
    undefined,
    [ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword)],
    ts.factory.createIdentifier("$wEventHandlers"),
    moduleBlock,
    ts.NodeFlags.Namespace
  );
};

function createComponentInterface(
  component: ComponentEventMethods
): ts.InterfaceDeclaration {
  return ts.factory.createInterfaceDeclaration(
    undefined,
    undefined,
    component.name,
    undefined,
    undefined,
    component.methods.map(method => {
      // const sig = method.signature;
      // const withDocs = ts.addSyntheticLeadingComment(
      //   sig,
      //   ts.SyntaxKind.MultiLineCommentTrivia,
      //   method.documentation
      // );

      return ts.setSyntheticLeadingComments(method.signature, [
        {
          text: method.documentation,
          pos: -1,
          end: -1,
          kind: ts.SyntaxKind.MultiLineCommentTrivia,
          hasTrailingNewLine: true,
          hasLeadingNewline: true
        }
      ]);
    })
  );
}

if (require.main === module) {
  createComponentsHandlersDTSFile();
}

export default createComponentsHandlersDTSFile;
