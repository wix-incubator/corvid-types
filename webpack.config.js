const path = require("path");
const env = process.env.CI ? "production" : (process.env.NODE_ENV || "development");
const DIST = path.join(__dirname, "./dist");

const baseConfig = libraryTarget => ({
  mode: env === "development" ? "development" : "production",
  entry: "./src/index.ts",
  experiments: {
    outputModule: libraryTarget === "esm"
  },
  output: {
    filename: `corvidTypes.${libraryTarget}.js`,
    chunkFilename: `[name].${libraryTarget}.chunk.js`,
    path: DIST,
    library: {
      type: libraryTarget === "esm" ? "module" : "umd"
    }
  },
  ...(libraryTarget === "umd" ? { target: "node" } : {}),
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
