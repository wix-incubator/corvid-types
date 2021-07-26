import getDriver, { Driver } from "./generate-components-handlers.driver";

describe("generate-events", () => {
  let driver: Driver;
  beforeEach(() => {
    driver = getDriver();
  });

  it.only("should return a .d.ts file with handler declarations", () => {
    driver.given.mockDeclarationsFile();

    const events = driver.get.events();

    expect(events).toContain(
      `/**
         * Adds an event handler that runs when an element is displayed
         *  in the viewable part of the current window.
         * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
         *  @eventType viewportEnter
         */
       onViewportEnter(handler: $w.EventHandler): $w.Element;
      `
    );
  });

  it("should return the base element event handlers", () => {
    driver.given.mockDeclarationsFile();

    const elementHandlers = driver.get.getComponentHandlersNames("Element");

    expect(elementHandlers).toEqual([
      "onMouseIn",
      "onMouseOut",
      "onViewportEnter",
      "onViewportLeave"
    ]);
  });

  it("should search recursivley for handlers", () => {
    driver.given.mockDeclarationsFile();

    const elementHandlers = driver.get.getComponentHandlersNames("Chatbox");

    expect(elementHandlers).toEqual([
      "onMouseIn",
      "onMouseOut",
      "onViewportEnter",
      "onViewportLeave"
    ]);
  });

  it("should return an object with all the handler details", () => {
    driver.given.mockDeclarationsFile();

    const button = driver.get.componentByName("Button");

    expect(button?.handlers).toContainEqual({
      origin: "Button",
      name: "onViewportEnter",
      description:
        "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
      kind: "function",
      handlerArgs: [
        {
          name: "handler",
          type: "$w.EventHandler"
        }
      ]
    });
  });
});
