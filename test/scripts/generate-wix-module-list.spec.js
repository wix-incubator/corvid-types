describe("generate wix module list", () => {
  it("Check output json", () => {
    const modules = require("../../dist/wixModules.json");
    modules.forEach(module => expect(module).toMatch(/^wix-/));
  });
});
