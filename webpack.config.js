const path = require("path");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const env = process.env.NODE_ENV || "development";
const DIST = path.join(__dirname, "./dist");
const copyPluginOptions = {
  patterns: [
    { from: "types/**/*", to: DIST },
    { from: "node_modules/@types/node/**/*", to: DIST }
  ]
};

const baseConfig = libraryTarget =>
  Object.assign(
    {
      mode: env === "development" ? "development" : "production",
      entry: {
        corvidTypes: "./src/index.ts"
      },
      output: {
        library: "corvidTypes",
        libraryTarget: libraryTarget === "esm" ? "var" : "umd",
        path: DIST,
        filename: `[name].${libraryTarget}.js`
      },
      resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
      },
      module: {
        rules: [
          {
            test: /\.js?$/,
            exclude: [/node_modules/],
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
                plugins: ["@babel/plugin-syntax-dynamic-import"]
              }
            }
          },
          {
            test: /\.d.ts$/i,
            use: "raw-loader"
          },
          {
            test: /\.(t|j)s?$/,
            use: "ts-loader",
            exclude: [/node_modules/]
          }
        ]
      }
    },
    libraryTarget === "esm"
      ? { plugins: [new EsmWebpackPlugin()] }
      : { plugins: [new CopyPlugin(copyPluginOptions)] }
  );

module.exports = [baseConfig("esm"), baseConfig("umd")];
