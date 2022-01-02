const path = require("path");
const env = process.env.NODE_ENV || "development";
const DIST = path.join(__dirname, "./dist");

const baseConfig = libraryTarget => ({
  mode: env === "development" ? "development" : "production",
  entry: "./src/index.ts",
  experiments: {
    outputModule: libraryTarget === "esm"
  },
  output: {
    filename: `corvidTypes.${libraryTarget}.js`,
    chunkFilename: "[name].chunk.js",
    path: DIST,
    publicPath: libraryTarget === "umd" ? "/" : "auto",
    library: {
      type: libraryTarget === "esm" ? "module" : "umd"
    }
  },
  optimization: {
    chunkIds: "deterministic" // To keep filename consistent between different modes (for example building only)
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
});

module.exports = [baseConfig("esm"), baseConfig("umd")];
