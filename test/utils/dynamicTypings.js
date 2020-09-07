const _ = require("lodash");

const {
  getWidgetTypeDeclarations,
  getPageElementsTypeDeclarations,
  getAmbientModuleDeclaration
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
      .map(getAmbientModuleDeclaration)
      .value();
  }

  if (widgets) {
    dynamicTypings.widgets = widgets.map(getWidgetTypeDeclarations);
  }

  return dynamicTypings;
};
