const getAmbientModuleDeclaration = name =>
  `
    declare module '${name}';
    declare module '${name}/*';
  `;

function getNpmDependenciesTypesDeclarations(dependencies = {}) {
  const dependenciesNames = Object.keys(dependencies);
  if (!dependenciesNames.length) return [];

  return dependenciesNames.map(packageName => ({
    path: `/dependencies/${packageName}.${dependencies[packageName]}.d.ts`,
    content: getAmbientModuleDeclaration(packageName)
  }));
}

module.exports = {
  getAmbientModuleDeclaration,
  getNpmDependenciesTypesDeclarations
};
