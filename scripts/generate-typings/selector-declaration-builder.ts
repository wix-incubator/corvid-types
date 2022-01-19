import fs from "fs-extra";
import path from "path";
import has_ from "lodash/has";
import Constants from "../constants";
// eslint-disable-next-line
const docworksDts = require("docworks-dts");
const { $W_GLOBAL_COMMENTS, $W_MEMBERS_KEY, QUERYABLE_TYPE } = Constants;

// todo::remove those functions form here asap
const {
  dtsProperty,
  dtsObjectTypeAlias,
  convertTreeToString
} = docworksDts.dtsGenerator;
const { convertOperationToFunction } = docworksDts.docworksToDtsConverters;
const $W = Constants.$w_MODULE_NAME;
const DECLARE_KEYWORD = "declare";

interface Operation {
  name: string;
  docs: {
    summary: string;
  };
}

interface DocworksService {
  name: string;
  docs: {
    summary: string;
  };
  operations: Array<Operation>;
  extra?: {
    [anyKey: string]: string;
  };
  memberOf: string;
}
interface DocworksQueryableService extends DocworksService {
  extra: {
    queryable: string;
  };
}
const find$wService = (
  services: Array<DocworksService>
): DocworksService | undefined => {
  return services.find(
    (service: DocworksService) =>
      service.name === $W && !has_(service, "memberOf")
  );
};

const getQueryableObjectType = (services: Array<DocworksService>) => {
  const isQueryableService = (
    service: DocworksService
  ): service is DocworksQueryableService =>
    !!(service.memberOf === $W && service.extra?.queryable);
  const queryableServices = services.filter(isQueryableService);
  const properties = queryableServices.map(service =>
    dtsProperty(service.name, `${$W}.${service.name}`)
  );

  return dtsObjectTypeAlias(QUERYABLE_TYPE, properties);
};

const extract$wComments = (
  services: Array<DocworksService>
): { [globalCommentsPlaceholders: string]: string } | undefined => {
  const $wService = find$wService(services);
  if (!$wService) throw new Error(`Can't find $w service`);

  const $wOperation = $wService.operations.find(
    operation => operation.name === $W
  );
  if (!$wOperation) return undefined;

  const [$w$wMembersComment] = $wService.operations
    .filter(o => o.name === $W)
    .map(operation => operation.docs.summary);

  const {
    DECLARATION_COMMENT,
    NAMESPACE_COMMENT,
    $W_TYPE_DECLARATION_COMMENT
  } = $W_GLOBAL_COMMENTS;
  return {
    [DECLARATION_COMMENT]: $wOperation.docs.summary,
    [NAMESPACE_COMMENT]: $wService.docs.summary,
    [$W_TYPE_DECLARATION_COMMENT]: $w$wMembersComment
  };
};

const extract$wMembers = (services: Array<DocworksService>): string => {
  const $wService = find$wService(services);
  if (!$wService) throw new Error(`Can't find $w service`);

  const $wMembersOperations = $wService.operations
    .filter(o => o.name !== $W)
    .map(operation => {
      return convertOperationToFunction($wService, operation, {
        documentationGenerator: ({ summary }: { summary: string }) => summary
      });
    });

  return convertTreeToString($wMembersOperations)
    .split(DECLARE_KEYWORD)
    .join("")
    .split("\n")
    .join("\n\t");
};

const declarationBuilder = (services: Array<DocworksService>): string => {
  const $wComments = extract$wComments(services);
  if (!$wComments) throw new Error(`Can't find $w comments`);
  const $wMembers = extract$wMembers(services);
  const queryableType = getQueryableObjectType(services);

  const page$wTemplate: string = fs.readFileSync(
    path.join(
      Constants.SRC_TYPES_FOLDER,
      Constants.DEST_PAGES_FOLDER,
      Constants.$W_DECLARATION_FULL_FILENAME
    ),
    "utf-8"
  );
  const page$wWithMembers: string = page$wTemplate.replace(
    $W_MEMBERS_KEY,
    $wMembers
  );
  const page$wFinal: string = Object.keys($wComments).reduce(
    (dts: string, commnetKey: string) =>
      dts.replace(commnetKey, $wComments[commnetKey]),
    page$wWithMembers
  );

  return [convertTreeToString({ queryableType }), page$wFinal].join("\n");
};

export default declarationBuilder;
