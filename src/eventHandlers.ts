import ComponentsHandlers from "./dynamicTypes/components-handlers";
import { ComponentDefinition } from "../scripts/generate-components-handlers/generate-components-handlers";

const getComponentHandlers = (
  name: keyof typeof ComponentsHandlers
): ComponentDefinition => {
  return ComponentsHandlers[name];
};

export default getComponentHandlers;
