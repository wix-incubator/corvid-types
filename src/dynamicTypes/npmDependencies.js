const getDefaultPackageRawDeclaration = name =>
  `
    declare module '${name}';
    declare module '${name}/*';
  `;

const BASE_PACKAGE_TYPES_URL = `https://unpkg.com`;

async function getRemoteTypeDeclaration(packageName) {
  // eslint-disable-next-line no-undef
  const typeDeclarationResponse = await fetch(
    `${BASE_PACKAGE_TYPES_URL}/${packageName}/velo-types/index.d.ts`
  );

  if (!typeDeclarationResponse.ok) {
    return getDefaultPackageRawDeclaration(packageName);
  }

  return typeDeclarationResponse.text();
}

async function getPackageRawDeclaration(packageName) {
  if (packageName.startsWith("@wix/")) {
    return getRemoteTypeDeclaration(packageName);
  }

  return getDefaultPackageRawDeclaration(packageName);
}

async function getPackagesTypeDeclarations(dependencies = {}) {
  const dependenciesNames = Object.keys(dependencies);
  if (!dependenciesNames.length) {
    return [];
  }

  const npmModulesTypeFilesPromises = dependenciesNames.map(
    async packageName => ({
      path: `/dependencies/${packageName}.${dependencies[packageName]}.d.ts`,
      content: await getPackageRawDeclaration(packageName)
    })
  );

  return Promise.all(npmModulesTypeFilesPromises);
}

module.exports = {
  getRaw: getDefaultPackageRawDeclaration,
  getFiles: getPackagesTypeDeclarations
};
