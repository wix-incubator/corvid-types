const corvidTypes = require("../../src");

describe("ts config", () => {
  describe("backend path", () => {
    it("should not be changed over time because users are using this path in their projects", () => {
      expect(corvidTypes.configPaths.backend).toEqual(
        "corvid-types/configs/tsconfig.backend.json"
      );
    });
  });
  describe("public path", () => {
    it("should not be changed over time because users are using this path in their projects", () => {
      expect(corvidTypes.configPaths.public).toEqual(
        "corvid-types/configs/tsconfig.public.json"
      );
    });
  });
  describe("page path", () => {
    it("should not be changed over time because users are using this path in their projects", () => {
      expect(corvidTypes.configPaths.page).toEqual(
        "corvid-types/configs/tsconfig.pages.json"
      );
    });
  });
});
