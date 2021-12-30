const env = process.env.NODE_ENV || "development";

module.exports = {
  mode: env === "development" ? "development" : "production",
  entry: "./src/index.ts",
  experiments: {
    outputModule: true
  },
  output: {
    library: {
      type: "module"
    },
    filename: "corvidTypes.js",
    chunkFilename: "[name].chunk.js"
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
