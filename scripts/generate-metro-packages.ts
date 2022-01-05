// import { Generator } from "npm-dts";
import pacote from "pacote";
import path from "path";
const dts = require("dts-bundle");

const WIX_PRIVATE_NPM_REGISTRY = "http://npm.dev.wixpress.com/";

const packageNames = ["@wix/wix-alarm-backend"];

Promise.all(
  packageNames.map(async packageName => {
    const packageDest = `types/common/node_modules/${packageName}`;
    await pacote.extract(packageName, packageDest, {
      registry: WIX_PRIVATE_NPM_REGISTRY
    });
    const root = path.resolve(process.cwd(), packageDest);
    // const outputFileName = `${packageName.replace("@wix/", "")}.d.ts`;
    // const output = path.resolve(root, `../../../${outputFileName}`);
    // new Generator(
    //   {
    //     root,
    //     output
    //   },
    //   true
    // ).generate();

    dts.bundle({
      name: "wix-alarm-backendz",
      main: root + "/build/index.d.ts",
      out: "wix-alarm-backendz.d.ts",
      outputAsModuleFolder: true
    });
    dts.bundle({
      name: "wix-alarm-backend",
      main: root + "/build/wix-alarm-backendz.d.ts"
    });
  })
).catch(error => console.error("ERROR!", error));
