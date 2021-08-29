import eventHandlersJSON from "../../dist/eventHandlers.json";

export type ComponentsEventHandlers = {
  [name: string]: EventHandler[];
};

export interface EventHandler {
  origin: string;
  name: string;
  description: string;
  kind: "function";
  type: string;
  handlerArgs: HandlerArg[];
}

interface HandlerArg {
  name: string;
  type: string | undefined;
}

export interface EventHandlersService {
  getComponentEventHandlers: (
    componentName: string
  ) => EventHandler[] | undefined;
}

const eventHandlers = eventHandlersJSON as ComponentsEventHandlers;

const eventHandlersService: EventHandlersService = {
  getComponentEventHandlers: (
    componentName: string
  ): EventHandler[] | undefined => {
    return eventHandlers[componentName];
  }
};

export default eventHandlersService;
