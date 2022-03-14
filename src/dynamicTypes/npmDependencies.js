const getDefaultPackageRawDeclaration = name =>
  `
    declare module '${name}';
    declare module '${name}/*';
  `;

const BASE_PACKAGE_TYPES_URL = `https://bo.wix.com/_serverless/package-types-resolver`;
const SERVER_TIMEOUT_MS = 5 * 1000;

async function getRemoteTypeDeclarationFromServer(packageName, packageVersion) {
  // eslint-disable-next-line no-undef
  const typeDeclarationResponse = await fetch(
    `${BASE_PACKAGE_TYPES_URL}/${packageName}@${packageVersion}`
  );

  if (!typeDeclarationResponse.ok) {
    throw new Error(
      `Unable to fetch ${packageName}@${packageVersion} type declaration`
    );
  }

  return typeDeclarationResponse.text();
}

async function getRemoteTypeDeclaration(packageName, packageVersion) {
  try {
    const result = await Promise.race([
      new Promise((_, reject) => setTimeout(reject, SERVER_TIMEOUT_MS)),
      getRemoteTypeDeclarationFromServer(packageName, packageVersion)
    ]);

    return result;
  } catch (ex) {
    return getDefaultPackageRawDeclaration(packageName);
  }
}

async function getPackageRawDeclaration(packageName, packageVersion) {
  if (packageName.startsWith("@wix/")) {
    return getRemoteTypeDeclaration(packageName, packageVersion);
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
      content: await getPackageRawDeclaration(
        packageName,
        dependencies[packageName]
      )
    })
  );

  return Promise.all(npmModulesTypeFilesPromises);
}

module.exports = {
  getRaw: getDefaultPackageRawDeclaration,
  getFiles: getPackagesTypeDeclarations
};
