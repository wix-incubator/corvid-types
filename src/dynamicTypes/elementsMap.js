const getPageElementsRawDeclarations = elementsMap =>
  "type PageElementsMap = {\n" +
  Object.keys(elementsMap)
    .map(nickname => `  "#${nickname}": ${elementsMap[nickname]};\n`)
    .join("") +
  "}";

function getPageElementsTypeDeclarations(elementsMap) {
  if (!elementsMap) return [];
  return [
    {
      path: "/elementsMap.d.ts",
      content: getPageElementsRawDeclarations(elementsMap)
    }
  ];
}

module.exports = {
  getPageElementsRawDeclarations,
  getPageElementsTypeDeclarations
};
