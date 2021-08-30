import generateComponentsEventHandlersFromDTS from "../../scripts/generate-components-handlers/event-handlers-generator";
import {
  ComponentsEventHandlers,
  EventHandler
} from "../../scripts/generate-components-handlers/event-handlers-parser";

export interface Driver {
  given: {
    mockDeclarationsFile: (path: string) => void;
  };
  get: {
    events: () => ComponentsEventHandlers;
    eventHandlersByComponentName: (name: string) => EventHandler[] | undefined;
    componentHandlersNames: (componentName: string) => string[] | undefined;
  };
}

const getDriver = (): Driver => {
  let events: ComponentsEventHandlers;

  return {
    given: {
      mockDeclarationsFile: (declarationsPath: string) => {
        const generatedEvents = generateComponentsEventHandlersFromDTS(
          declarationsPath
        );
        if (!generatedEvents) {
          throw new Error("Could not generate events");
        }
        events = generatedEvents;
      }
    },
    get: {
      events() {
        return events;
      },
      eventHandlersByComponentName(name: string): EventHandler[] | undefined {
        return events[name];
      },
      componentHandlersNames(componentName: string) {
        const handlers = this.eventHandlersByComponentName(componentName);
        return handlers ? handlers.map(handler => handler.name) : undefined;
      }
    }
  };
};

export default getDriver;
