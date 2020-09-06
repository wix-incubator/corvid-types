// TODO: Get the project file tree as a paramter and generate a d.ts containing the declarations
//      relevant per the context. Generate declaration per file (i.e without wildcard)

module.exports = function getJsonTypeDeclarations() {
  return [
    {
      path: "/patches/jsonFiles.d.ts",
      content: "declare module '*.json';"
    }
  ];
};
