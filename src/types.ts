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
  registerComponentEventHandlers: (
    componentName: string,
    handlers: EventHandler[]
  ) => void;
}
