import path from "path";
import {
  generateComponentsHandlers,
  ComponentDefinition,
  ComponentDefinitionsMap
} from "../../scripts/generate-components-handlers/generate-components-handlers";

const FIXTURE_PATH = path.join(__dirname, "./fixtures/$w-events.d.ts");

export interface Driver {
  given: {
    mockDeclarationsFile: () => void;
  };
  get: {
    componentByName: (name: string) => ComponentDefinition | undefined;
    getComponentHandlersNames: (componentName: string) => string[] | undefined;
  };
}

const getDriver = (): Driver => {
  let events: ComponentDefinitionsMap;

  return {
    given: {
      mockDeclarationsFile: () => {
        events = generateComponentsHandlers(FIXTURE_PATH);
      }
    },
    get: {
      componentByName(name: string): ComponentDefinition | undefined {
        return events[name];
      },
      getComponentHandlersNames(componentName: string) {
        const component = this.componentByName(componentName);
        return component
          ? component.handlers.map(handler => handler.name)
          : undefined;
      }
    }
  };
};

export default getDriver;
