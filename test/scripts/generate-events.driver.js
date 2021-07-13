const path = require("path");
const { generateEvents } = require("../../scripts/generate-events");

const FIXTURE_PATH = path.join(__dirname, "./fixtures/$w-events.d.ts");

const Driver = () => {
  let events = null;

  return {
    given: {
      mockDeclarationsFile: () => {
        events = generateEvents(FIXTURE_PATH);
      }
    },
    get: {
      componentByName(name) {
        return events.find(e => e.name === name);
      },
      getComponentHandlersNames(componentName) {
        return this.componentByName(componentName).handlers.map(
          handler => handler.name
        );
      }
    }
  };
};

module.exports = Driver;
