const path = require("path");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");
const env = process.env.NODE_ENV || "development";
const DIST = path.join(__dirname, "./dist");
const baseConfig = libraryTarget =>
  Object.assign(
    {
      mode: env === "development" ? "development" : "production",
      entry: {
        corvidTypes: "./src/index.js"
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
