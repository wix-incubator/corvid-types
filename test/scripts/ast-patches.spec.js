const path = require("path");
const ts = require("typescript");
const changeWixAuthElevateFunctionType = require("../../scripts/ast-patches/changeWixAuthElevateFunctionType")
  .default;

const fixturesDir = path.join(__dirname, "./fixtures", "wix-auth");

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

    it("Should not fail if there is no wix-auth module", () => {
      const sourceFilePath = path.join(fixturesDir, "wix-auth-no-module.d.ts");
      const tsProgram = ts.createProgram([sourceFilePath], {});
      const sourceAst = tsProgram.getSourceFile(sourceFilePath);

      expect(() => changeWixAuthElevateFunctionType(sourceAst)).not.toThrow();
    });

    it("Should not fail if there is no elevate function", () => {
      const sourceFilePath = path.join(fixturesDir, "wix-auth-no-elevate.d.ts");
      const tsProgram = ts.createProgram([sourceFilePath], {});
      const sourceAst = tsProgram.getSourceFile(sourceFilePath);

      expect(() => changeWixAuthElevateFunctionType(sourceAst)).not.toThrow();
    });
  });
});
