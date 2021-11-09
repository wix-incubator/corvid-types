import eventHandlersJSON from "../../eventHandlers.json";
import { ComponentsEventHandlers } from "../../scripts/generate-components-handlers/event-handlers-parser";

export interface EventHandler {
  origin: string;
  name: string;
  description: string;
  kind: "function";
  type: string;
  handlerArgs: HandlerArg[];
}

export interface HandlerArg {
  name: string;
  type: string | undefined;
}

export interface EventHandlersService {
  getComponentEventHandlers: (
    componentName: string
  ) => EventHandler[] | undefined;
  registerComponentEventHandlers: (
    componentName: string,
    handlers: EventHandler[]
  ) => void;
}

const $wEventHandlers = eventHandlersJSON as ComponentsEventHandlers;
const eventHandlers = { ...$wEventHandlers };

const eventHandlersService: EventHandlersService = {
  getComponentEventHandlers: (
    componentName: string
  ): EventHandler[] | undefined => {
    return eventHandlers[componentName];
  },
  registerComponentEventHandlers(
    componentName: string,
    handlers: EventHandler[]
  ): void {
    eventHandlers[componentName] = handlers;
  }
};

export default eventHandlersService;
