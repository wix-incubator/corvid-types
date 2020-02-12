const path = require("path");
const env = process.env.NODE_ENV || "development";
const DIST = path.join(__dirname, "./dist");
module.exports = {
  mode: env === "development" ? "development" : "production",
  entry: {
    corvidTypes: "./src/index.js"
  },
  output: {
    library: "corvidTypes",
    libraryTarget: "umd",
    path: DIST,
    filename: "[name].js"
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
};
