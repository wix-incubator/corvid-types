import { EventHandler, ComponentsEventHandlers } from "../../scripts/types";
import Constants from "../../scripts/constants";
import eventHandlersJSON from "../../dist/eventHandlers.json";

const eventHandlers = eventHandlersJSON as ComponentsEventHandlers;

const removeModulePrefix = (componentName: string) =>
  componentName.startsWith(Constants.EVENTS_MODULE_PREFIX)
    ? componentName.slice(Constants.EVENTS_MODULE_PREFIX.length)
    : componentName;

const eventHandlersService = {
  getComponentEventHandlers: (
    componentName: string
  ): EventHandler[] | undefined => {
    const nameWithoutModule = removeModulePrefix(componentName);
    return eventHandlers[nameWithoutModule];
  }
};

export default eventHandlersService;
