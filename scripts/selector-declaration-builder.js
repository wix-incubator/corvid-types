const fs = require("fs-extra");
const docworksDts = require("docworks-dts");
const {
  dtsProperty,
  dtsObjectTypeAlias,
  convertTreeToString
} = docworksDts.dtsGenerator;
const { convertOperationToFunction } = docworksDts.docworksToDtsConverters;

const QUERYABLE_TYPE = "TypeNameToSdkType";
const $W = "$w";
const $W_MEMBERS_KEY = "/** $W_NAMESPACE_MEMBERS */";
const DECLARE_KEYWORD = "declare";
function find$wService(services) {
  return services.find(
    service =>
      service.name === $W &&
      !Object.prototype.hasOwnProperty.call(service, "memberOf")
  );
}

function getQueryableObjectType(services) {
  const isQueryableService = service =>
    service.memberOf === $W && service.extra.queryable;
  const queryableServices = services.filter(isQueryableService);
  const properties = queryableServices.map(service =>
    dtsProperty(service.name, `${$W}.${service.name}`)
  );

  return dtsObjectTypeAlias(QUERYABLE_TYPE, properties);
}

function extract$wComments(services) {
  const $wService = find$wService(services);
  const $wOperation = $wService.operations.find(
    operation => operation.name === $W
  );
  const [$w$wMembersComment] = $wService.operations
    .filter(o => o.name === $W)
    .map(operation => operation.docs.summary);
  return {
    $W_GLOBAL_DECLARATION_COMMENT: $wOperation.docs.summary,
    $W_NAMESPACE_COMMENT: $wService.docs.summary,
    $W_$W_DECLARATION_COMMENT: $w$wMembersComment
  };
}

function extract$wMembers(services) {
  const $wService = find$wService(services);
  const $wMembersOperations = $wService.operations
    .filter(o => o.name !== $W)
    .map(operation => {
      return convertOperationToFunction($wService, operation, {
        documentationGenerator: ({ summary }) => summary
      });
    });

  return convertTreeToString($wMembersOperations)
    .split(DECLARE_KEYWORD)
    .join("")
    .split("\n")
    .join("\n\t");
}

function $wDeclarationBuilder(services) {
  const $wComments = extract$wComments(services);
  const $wMembers = extract$wMembers(services);
  const queryableType = getQueryableObjectType(services);

  let page$w = fs.readFileSync("./src_types/pages/$w.d.ts", "utf-8");
  page$w = page$w.replace($W_MEMBERS_KEY, $wMembers);
  page$w = Object.keys($wComments).reduce(
    (dts, commnetKey) => dts.replace(commnetKey, $wComments[commnetKey]),
    page$w
  );

  return [convertTreeToString({ queryableType }), page$w].join("\n");
}

module.exports = $wDeclarationBuilder;
