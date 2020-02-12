const getFunctionTypeParamsString = params => {
  if (!params) {
    return "";
  }
  return params
    .reduce((acc, param) => `${acc}${param.name}: any, `, "")
    .slice(0, -2);
};

const getMembersTypes = members => {
  return Object.keys(members).reduce((acc, value) => {
    const { kind, params } = members[value];
    return `${acc} ${
      kind === "member"
        ? `${value}: any;\n`
        : `${value}(${getFunctionTypeParamsString(params)});\n`
    }`;
  }, "");
};

const getWidgetTypeDeclarations = ({ manifest }) => {
  return Object.keys(manifest).reduce((dts, className) => {
    const { members = [] } = manifest[className];
    // should it be part of the $w namespace
    // need to understand which type should we extend, ($w.Node() or $w.Element)
    // add typings of widget events
    return `${dts} interface ${className} extends $w.Node { \n${getMembersTypes(
      members
    )} }`;
  }, "");
};
module.exports = {
  getWidgetTypeDeclarations
};
