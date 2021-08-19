import { EventHandler, ComponentsEventHandlers } from "../../scripts/types";
import eventHandlersJSON from "../../dist/eventHandlers.json";

const eventHandlers = eventHandlersJSON as ComponentsEventHandlers;

const eventHandlersService = {
  getComponentEventHandlers: (
    componentName: string
  ): EventHandler[] | undefined => {
    return eventHandlers[componentName];
  }
};

export default eventHandlersService;
