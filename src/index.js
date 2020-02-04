// const path = require("path");
const { getWidgetTypeDeclarations } = require("./widget");
const getPageElementsTypeDeclarations = elementsMap =>
  "type PageElementsMap = {\n" +
  Object.keys(elementsMap)
    .map(nickname => `  "#${nickname}": ${elementsMap[nickname]};\n`)
    .join("") +
  "}";
const fullCorvidTypes = require("../fullCorvidTypes.json");
// const getReferencesLibsFromDeclaration = declaration => {
//   const references = declaration.match(
//     /<reference\s+lib=["']+([a-z]|[0-9]|\.)+["']+\s+\/>/g
//   );
//   return references
//     ? references
//         .map(reference =>
//           reference.replace(/((<reference\s+lib=["'])|(["']+\s+\/>))/g, "")
//         )
//         .map(path => `${path}.d.ts`)
//     : [];
// };

// const getReferencesPathsFromDeclaration = declaration => {
//   const references = declaration.match(
//     /<reference\s+path=["']+([A-Z]|[a-z]|[0-9]|\.|\/|\$)+["']+\s+\/>/g
//   );
//   return references
//     ? references.map(reference =>
//         reference.replace(/((<reference\s+path=["'])|(["']+\s+\/>))/g, "")
//       )
//     : [];
// };

const getDynamicTypes = (elementsMap, widgets) => {
  const dynamicTypes = [];
  if (elementsMap) {
    dynamicTypes.push({
      path: "elementsMap.d.ts",
      content: getPageElementsTypeDeclarations(elementsMap)
    });
  }
  if (widgets && widgets.length) {
    widgets.forEach((manifest, index) => {
      dynamicTypes.push({
        path: `widgets${index}.d.ts`,
        content: getWidgetTypeDeclarations({
          manifest
        })
      });
    });
  }
  return dynamicTypes;
};

// const getCorvidTypings = ({ type, elementsMap, widgets }) => {
//   const corvidTypesTypings = require.context("../types/", true, /\.(d\.ts)$/);
//   const jsLib = Object.assign({}, getDynamicTypes(elementsMap, widgets));

//   let paths = [`index.d.ts`];

//   while (paths.length) {
//     const p = path.resolve(`${type}/`, `${paths.shift()}`);
//     const content = corvidTypesTypings(`.${p}`).default;
//     jsLib[p] = content;
//     paths = paths.concat(getReferencesPathsFromDeclaration(content));
//   }
//   return Object.entries(jsLib).reduce((ret, [path, content]) => {
//     ret.push({ path, content });
//     return ret;
//   }, []);
// };

// const getJavascriptTypings = () => {
//   const MAIN_JAVASCRIPT_PATH = "es2015.d.ts";
//   const javascriptTypings = require.context(
//     "typescript/lib/",
//     true,
//     /^\.\/lib\.(es2015|es5).*\.(d\.ts)$/
//   );

//   const jsLib = {};
//   let paths = [`${MAIN_JAVASCRIPT_PATH}`];

//   while (paths.length) {
//     const path = `/lib.${paths.shift()}`;
//     const content = javascriptTypings(`.${path}`).default;
//     jsLib[path] = content;
//     paths = paths.concat(getReferencesLibsFromDeclaration(content));
//   }
//   return Object.entries(jsLib).reduce((ret, [path, content]) => {
//     ret.push({ path, content });
//     return ret;
//   }, []);
// };
// const getCorvidTypings = ({ type, widget, elementsMap }) => {};

module.exports = {
  configPaths: {
    page: "corvid-types/configs/tsconfig.pages.json",
    backend: "corvid-types/configs/tsconfig.backend.json",
    public: "corvid-types/configs/tsconfig.public.json"
  },
  declarations: {
    page: ({ elementsMap, widget } = {}) => {
      return [
        ...fullCorvidTypes.BASE,
        ...fullCorvidTypes.PAGES,
        ...getDynamicTypes({
          elementsMap,
          widget
        })
      ];
    },
    backend: () => {
      return [...fullCorvidTypes.BASE, ...fullCorvidTypes.BACKEND];
    },
    public: () => {
      return [...fullCorvidTypes.BASE, ...fullCorvidTypes.PUBLIC];
    }
  },
  getWidgetTypeDeclarations,
  getPageElementsTypeDeclarations
};
