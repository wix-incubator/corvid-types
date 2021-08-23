import {
  EventHandler,
  ComponentsEventHandlers,
  EventHandlersService
} from "../../src/types";
import eventHandlersJSON from "../../dist/eventHandlers.json";

const eventHandlers = eventHandlersJSON as ComponentsEventHandlers;

const eventHandlersService: EventHandlersService = {
  getComponentEventHandlers: (
    componentName: string
  ): EventHandler[] | undefined => {
    return eventHandlers[componentName];
  }
};

export default eventHandlersService;
