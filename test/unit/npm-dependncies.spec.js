const npmDependencies = require("../../src/dynamicTypes/npmDependencies");

describe("npm dependencies", () => {
  describe("should load types for npm modules", () => {
    it("get default type when request raw", () => {
      const rawNpmType = npmDependencies.getRaw("react");
      expect(rawNpmType).toMatchSnapshot();
    });

    it("get default type when request files and the namespaces is not @wix", async () => {
      const npmDtsFiles = await npmDependencies.getFiles({
        react: "16.8.6",
        "react-dom": "16.8.6"
      });
      expect(npmDtsFiles).toMatchSnapshot();
    });

    it("get proper type for @wix scoped npm module", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          text: () => "type SababaType = {}"
        })
      );
      const npmDtsFiles = await npmDependencies.getFiles({
        "@wix/react-velo": "1.0.0"
      });
      expect(npmDtsFiles).toMatchSnapshot();
      expect(npmDtsFiles[0].content).toBe("type SababaType = {}");
    });

    it("get default type for @wix scoped npm module if request failed", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false
        })
      );
      const npmDtsFiles = await npmDependencies.getFiles({
        "@wix/react-velo": "1.0.0"
      });
      expect(npmDtsFiles).toMatchSnapshot();
      expect(npmDtsFiles[0].content).toContain(
        "declare module '@wix/react-velo/*'"
      );
    });

    it("get default type for @wix scoped npm module if fetch throws", async () => {
      global.fetch = jest.fn(() => Promise.reject(new Error("Fetch error")));
      const npmDtsFiles = await npmDependencies.getFiles({
        "@wix/react-velo": "1.0.0"
      });
      expect(npmDtsFiles).toMatchSnapshot();
      expect(npmDtsFiles[0].content).toContain(
        "declare module '@wix/react-velo/*'"
      );
    });
  });
});
