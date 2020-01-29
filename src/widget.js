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
        ? `${value}: any;`
        : `${value}(${getFunctionTypeParamsString(params)});`
    }`;
  }, "");
};

const getWidgetTypeDeclarations = ({ manifest }) => {
  return Object.keys(manifest).reduce((dts, className) => {
    const { members = [] } = manifest[className];
    // need to understand which type should we extend, ($w.Node() or $w.Element)
    return `${dts} declare namespace $w { interface ${className} extends $w.Node { ${getMembersTypes(
      members
    )} } }`;
  }, "");
};
module.exports = {
  getWidgetTypeDeclarations
};
