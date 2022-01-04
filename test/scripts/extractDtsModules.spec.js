const path = require("path");
const extractDtsModules = require("../../scripts/generate-wix-module-list/extractDtsModules")
  .default;

const fixturesDir = path.join(__dirname, "./fixtures");

describe("extractDtsModules", () => {
  it("Should throw error if one file doesn't exist", () => {
    expect(() => extractDtsModules(["~/path/to/non/existing/file"])).toThrow(
      /existing\/file/
    );
  });

  it("Should throw error if one file has is illegal syntax", () => {
    const files = [
      path.join(fixturesDir, "complex.d.ts"),
      path.join(fixturesDir, "badSyntax.d.ts")
    ];
    expect(() => extractDtsModules(files)).toThrow();
  });

  it("Should return empty for no files given", () => {
    expect(extractDtsModules()).toEqual([]);
  });

  it("Should get module from single dts", () => {
    expect(
      extractDtsModules([path.join(fixturesDir, "withCommented.d.ts")])
    ).toEqual(["real-module"]);
  });

  it("Should get module from multiple files", () => {
    const files = [
      path.join(fixturesDir, "complex.d.ts"),
      path.join(fixturesDir, "withCommented.d.ts")
    ];
    // NOTICE - already sorted to match
    const expected = ["real-module", "wix-data", "wix-site"];
    expect(extractDtsModules(files).sort()).toEqual(expected);
  });
});
