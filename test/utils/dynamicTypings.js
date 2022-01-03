const _ = require("lodash");

const {
  getWidgetTypeDeclarations,
  getPageElementsTypeDeclarations,
  getPackageTypeDecelerations
} = require("../../src/index").default;

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

  return dynamicTypings;
};
