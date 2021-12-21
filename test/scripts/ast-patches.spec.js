const path = require("path");
const ts = require("typescript");
const changeWixAuthElevateFunctionType = require("../../scripts/ast-patches/changeWixAuthElevateFunctionType");

const fixturesDir = path.join(__dirname, "./fixtures");

describe("Ast patches", () => {
  describe("ChangeWixAuthElevateFunctionType", () => {
    it("Should apply patch", () => {
      const sourceFilePath = path.join(fixturesDir, "wix-auth.d.ts");
      const tsProgram = ts.createProgram([sourceFilePath], {});
      const sourceAst = tsProgram.getSourceFile(sourceFilePath);

      const afterPatchAst = changeWixAuthElevateFunctionType(sourceAst);
      const result = ts.createPrinter().printFile(afterPatchAst);

      expect(result).toMatchSnapshot();
    });
  });
});
