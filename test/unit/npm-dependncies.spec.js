const npmDependencies = require("../../src/dynamicTypes/npmDependencies");

const givenPackage = async (pacakgeDefinitions, assertionCallback) => {
  const originalFetch = global.fetch;

  global.fetch = jest.fn(url => {
    const typeResolverBaseURLSuffix = "npm-package-types/";
    const packageName = url.split(typeResolverBaseURLSuffix)[1];

    if (typeof pacakgeDefinitions[packageName] === "function") {
      return Promise.resolve({
        ok: true,
        text: pacakgeDefinitions[packageName]
      });
    } else {
      return Promise.resolve({
        ok: false,
        text: () => `Error: ${packageName} not found`
      });
    }
  });

  await assertionCallback();

  global.fetch = originalFetch;
};

describe("npm dependencies", () => {
  describe("should load types for npm modules", () => {
    it("get default type when files requested and the namespaces is not @wix", async () => {
      const npmDtsFiles = await npmDependencies.getFiles({
        react: "16.8.6",
        "react-dom": "16.8.6"
      });

      expect(npmDtsFiles[0].content).toContain(`declare module 'react';`);
      expect(npmDtsFiles[0].content).toContain(`declare module 'react/*';`);
      expect(npmDtsFiles[1].content).toContain(`declare module 'react-dom';`);
      expect(npmDtsFiles[1].content).toContain(`declare module 'react-dom/*';`);
    });

    it("get proper type for @wix scoped npm module", async () => {
      await givenPackage(
        {
          "@wix/react-velo@1.0.0": () => "type SababaType = {}"
        },
        async () => {
          const npmDtsFiles = await npmDependencies.getFiles({
            "@wix/react-velo": "1.0.0"
          });

          expect(npmDtsFiles[0].content).toBe("type SababaType = {}");
        }
      );
    });

    it("get default type for @wix scoped npm module if request failed", async () => {
      await givenPackage({}, async () => {
        const npmDtsFiles = await npmDependencies.getFiles({
          "@wix/react-velo": "1.0.0"
        });

        expect(npmDtsFiles[0].content).toContain(
          "declare module '@wix/react-velo/*'"
        );
      });
    });

    it("get default type for @wix scoped npm module if fetch throws", async () => {
      await givenPackage(
        {
          "@wix/react-velo@1.0.0": () => Promise.reject(new Error("bad"))
        },
        async () => {
          const npmDtsFiles = await npmDependencies.getFiles({
            "@wix/react-velo": "1.0.0"
          });

          expect(npmDtsFiles[0].content).toContain(
            "declare module '@wix/react-velo/*'"
          );
        }
      );
    });

    it("should handle request properly evne if it hangs", async () => {
      await givenPackage(
        {
          "@wix/react-velo@1.0.0": () =>
            new Promise(resolve => {
              const ALOT_OF_SECONDS_IN_MS = 120 * 1000;
              const timeoutHandle = setTimeout(resolve, ALOT_OF_SECONDS_IN_MS);
              timeoutHandle.unref();
            })
        },
        async () => {
          const npmDtsFiles = await npmDependencies.getFiles({
            "@wix/react-velo": "1.0.0"
          });

          expect(npmDtsFiles[0].content).toContain(
            "declare module '@wix/react-velo/*'"
          );
        }
      );
    }, 6000);
  });
});
