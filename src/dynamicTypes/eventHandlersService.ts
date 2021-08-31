import eventHandlersJSON from "../../dist/eventHandlers.json";
import {
  ComponentsEventHandlers,
  EventHandler
} from "../../scripts/generate-components-handlers/event-handlers-parser";

export { EventHandler } from "../../scripts/generate-components-handlers/event-handlers-parser";
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
