import path from "path";
import {
  generateComponentsHandlers,
  ComponentEventMethods,
  ComponentsEventsMap
} from "../../scripts/generate-components-handlers/generate-components-handlers";

const FIXTURE_PATH = path.join(__dirname, "./fixtures/$w-events.d.ts");

export interface Driver {
  given: {
    mockDeclarationsFile: () => void;
  };
  get: {
    componentByName: (name: string) => ComponentEventMethods | undefined;
    getComponentHandlersNames: (componentName: string) => string[] | undefined;
    getMethodDocumentation: (
      componentName: string,
      methodName: string
    ) => string | undefined;
  };
}

const getDriver = (): Driver => {
  let events: ComponentsEventsMap;

  return {
    given: {
      mockDeclarationsFile: () => {
        events = generateComponentsHandlers(FIXTURE_PATH);
      }
    },
    get: {
      componentByName(name: string): ComponentEventMethods | undefined {
        return events[name];
      },
      getComponentHandlersNames(componentName: string): string[] | undefined {
        const component = this.componentByName(componentName);
        return component
          ? component.methods.map(method => method.signature.getText())
          : undefined;
      },
      getMethodDocumentation(
        componentName: string,
        methodName: string
      ): string | undefined {
        const component = this.componentByName(componentName);
        return component?.methods.find(method =>
          method.signature.name.getText().includes(methodName)
        )?.documentation;
      }
    }
  };
};

export default getDriver;
