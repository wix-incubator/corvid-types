module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.json",
      babelConfig: {
        presets: [["@babel/env", {"modules": false}]],
        plugins: ["@babel/syntax-dynamic-import"],
        env: {
          test: {
            plugins: ["transform-dynamic-import"]
          }
        }
      }
    }
  }
};
