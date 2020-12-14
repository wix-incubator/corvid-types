const fs = require("fs-extra");
const docworksDts = require("docworks-dts");
const {
  dtsProperty,
  dtsObjectTypeAlias,
  convertTreeToString
} = docworksDts.dtsGenerator;

const QUERYABLE_TYPE = "TypeNameToSdkType";
const $W = "$w";

function getQueryableObjectType(services) {
  const isQueryableService = service =>
    service.memberOf === $W && service.extra.queryable;
  const queryableServices = services.filter(isQueryableService);
  const properties = queryableServices.map(service =>
    dtsProperty(service.name, `${$W}.${service.name}`)
  );

  return dtsObjectTypeAlias(QUERYABLE_TYPE, properties);
}

function $wDeclarationBuilder(services) {
  const queryableType = getQueryableObjectType(services);

  const page$w = fs.readFileSync("./src_types/pages/$w.d.ts", null, "utf-8");
  return [convertTreeToString({ queryableType }), page$w].join("\n");
}

module.exports = $wDeclarationBuilder;
