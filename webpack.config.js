const path = require("path");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");
const env = process.env.NODE_ENV || "development";
const WITH_CUSTOMS = !!process.env.CUSTOM_SERVICES;
const DIST = path.join(__dirname, WITH_CUSTOMS ? "customTypes" : "", "dist");
const INDEX_FILE = WITH_CUSTOMS
  ? "./src/customTypesIndex.js"
  : "./src/index.js";

const baseConfig = libraryTarget =>
  Object.assign(
    {
      mode: env === "development" ? "development" : "production",
      entry: {
        corvidTypes: INDEX_FILE
      },
      output: {
        library: "corvidTypes",
        libraryTarget: libraryTarget === "esm" ? "var" : "umd",
        path: DIST,
        filename: `[name].${libraryTarget}.js`
      },
      module: {
        rules: [
          {
            test: /\.js?$/,
            exclude: [/node_modules/],
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              }
            }
          },
          {
            test: /\.d.ts$/i,
            use: "raw-loader"
          }
        ]
      }
    },
    libraryTarget === "esm" ? { plugins: [new EsmWebpackPlugin()] } : {}
  );

module.exports = [baseConfig("esm"), baseConfig("umd")];
