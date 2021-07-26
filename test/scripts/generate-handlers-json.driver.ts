import path from "path";
import getEventsHandlersService, {
  ComponentsMap,
  EventHandler
} from "../../scripts/generate-components-handlers/generate-handlers-json";

const FIXTURE_PATH = path.join(__dirname, "./fixtures/$w-events.d.ts");

export interface Driver {
  given: {
    mockDeclarationsFile: () => void;
  };
  get: {
    events: () => ComponentsMap;
    eventHandlersByComponentName: (name: string) => EventHandler[] | undefined;
    componentHandlersNames: (componentName: string) => string[] | undefined;
  };
}

const getDriver = (): Driver => {
  let events: ComponentsMap;

  return {
    given: {
      mockDeclarationsFile: () => {
        const generatedEvents = getEventsHandlersService().generate(
          FIXTURE_PATH
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
