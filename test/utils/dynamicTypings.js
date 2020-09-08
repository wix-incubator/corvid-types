const _ = require("lodash");

const {
  getWidgetTypeDeclarations,
  getPageElementsTypeDeclarations,
  getPackageTypeDecelerations,
  getJswTypeDeclarations
} = require("../../dist/corvidTypes.umd");

module.exports = function getDynamicTypings({
  elementsMap,
  dependencies,
  widgets
}) {
  const dynamicTypings = {};

  if (elementsMap) {
    dynamicTypings.elementsMap = getPageElementsTypeDeclarations(elementsMap);
  }

  if (dependencies) {
    dynamicTypings.dependencies = _.chain(dependencies)
      .keys()
      .map(getPackageTypeDecelerations)
      .value();
  }

  if (widgets) {
    dynamicTypings.widgets = widgets.map(getWidgetTypeDeclarations);
  }

  dynamicTypings.jswFiles = getJswTypeDeclarations();

  return dynamicTypings;
};
