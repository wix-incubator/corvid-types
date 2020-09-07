// TODO: Get the project file tree as a paramter and generate a d.ts containing a deceleration
//       foreach .jsw file (i.e remove the wildcard)

const getJswRawDeclaration = () => "declare module 'backend/*.jsw';";

function getJswTypeDeclarations() {
  return [
    {
      path: "/patches/jswModules.d.ts",
      content: getJswRawDeclaration()
    }
  ];
}

module.exports = {
  getJswRawDeclaration,
  getJswTypeDeclarations
};
