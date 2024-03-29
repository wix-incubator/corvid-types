import path from "path";
import getDriver, { Driver } from "./generate-handlers-json.driver";

const FIXTURE_PATH = path.join(__dirname, "./fixtures/$w-events.d.ts");

describe("generate-events", () => {
  let driver: Driver;
  beforeEach(() => {
    driver = getDriver();
  });

  it("should return the base element event handlers", () => {
    driver.given.mockDeclarationsFile(FIXTURE_PATH);

    const elementHandlers = driver.get.componentHandlersNames("$w.Element");

    expect(elementHandlers).toEqual([
      "onMouseIn",
      "onMouseOut",
      "onViewportEnter",
      "onViewportLeave"
    ]);
  });

  it("should search recursivley for handlers", () => {
    driver.given.mockDeclarationsFile(FIXTURE_PATH);

    const elementHandlers = driver.get.componentHandlersNames("$w.Chatbox");

    expect(elementHandlers).toEqual([
      "onMessageReceived",
      "onMessageSent",
      "onMouseIn",
      "onMouseOut",
      "onViewportEnter",
      "onViewportLeave"
    ]);
  });

  it("should return an object with all the handler details", () => {
    driver.given.mockDeclarationsFile(FIXTURE_PATH);

    const buttonHandlers = driver.get.eventHandlersByComponentName("$w.Button");

    expect(buttonHandlers).toContainEqual({
      origin: "Button",
      name: "onViewportEnter",
      description:
        "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
      kind: "function",
      type: "viewportEnter",
      handlerArgs: [
        {
          name: "event",
          type: "$w.Event"
        }
      ]
    });
    expect(buttonHandlers).toContainEqual({
      origin: "Button",
      name: "onClick",
      description:
        "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
      kind: "function",
      type: "click",
      handlerArgs: [
        {
          name: "event",
          type: "$w.MouseEvent"
        }
      ]
    });
  });
});
