const getPackageRawDeclaration = name =>
  `
    declare module '${name}';
    declare module '${name}/*';
  `;

function getPackagesTypeDeclarations(dependencies = {}) {
  const dependenciesNames = Object.keys(dependencies);
  if (!dependenciesNames.length) return [];

  return dependenciesNames.map(packageName => ({
    path: `/dependencies/${packageName}.${dependencies[packageName]}.d.ts`,
    content: getPackageRawDeclaration(packageName)
  }));
}

module.exports = {
  getRaw: getPackageRawDeclaration,
  getFiles: getPackagesTypeDeclarations
};
