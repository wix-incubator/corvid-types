const path = require("path");
const env = process.env.NODE_ENV || "development";
const DIST = path.join(__dirname, "./dist");

module.exports = {
  mode: env === "development" ? "development" : "production",
  entry: "./src/index.ts",
  experiments: {
    outputModule: true
  },
  output: {
    filename: `corvidTypes.esm.js`,
    chunkFilename: "[name].chunk.js",
    path: DIST,
    library: {
      type: "module"
    }
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
        test: /\.(t|j)s?$/,
        use: "ts-loader",
        exclude: [/node_modules/]
      }
    ]
  }
};
