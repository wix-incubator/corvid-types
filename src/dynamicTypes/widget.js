const getFunctionTypeParamsString = (params = []) =>
  params.map(param => `${param.name}: any `).join(",");

const getEventHandlersTypes = eventHandlers =>
  Object.keys(eventHandlers)
    .map(eventName => `${eventName}(eventHandler: (event: any) => void );`)
    .join("\n");

const getMembersTypes = members =>
  Object.keys(members)
    .map(name => {
      const { kind, params } = members[name];
      return `${
        kind === "function"
          ? `${name}(${getFunctionTypeParamsString(params)});`
          : `${name}: any;`
      }`;
    })
    .join("\n");

const getWidgetRawDeclaration = ({ name, members = {}, events = {} }) => {
  return `interface ${name} extends $w.IFrame { 
    ${getMembersTypes(members)} ${getEventHandlersTypes(events)}}`;
};

function getWidgetsTypeDeclarations(widgets) {
  if (!widgets) return [];

  return widgets.map(({ name, events, members }) => ({
    path: `/widgets/${name}.d.ts`,
    content: getWidgetRawDeclaration({ name, members, events })
  }));
}

module.exports = {
  getRaw: getWidgetRawDeclaration,
  getFiles: getWidgetsTypeDeclarations
};
