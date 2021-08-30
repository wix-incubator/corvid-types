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
