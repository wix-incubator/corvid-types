const path = require("path");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");
const env = process.env.NODE_ENV || "development";
const DIST = path.join(__dirname, "./dist");

module.exports = {
  mode: env === "development" ? "development" : "production",
  entry: {
    corvidTypes: "./src/index.ts"
  },
  output: {
    library: "corvidTypes",
    libraryTarget: "var",
    path: DIST,
    filename: `[name].esm.js`
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
            presets: ["@babel/preset-env"]
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
  },
  plugins: [new EsmWebpackPlugin()]
};
