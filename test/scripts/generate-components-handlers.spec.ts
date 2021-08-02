import getDriver, { Driver } from "./generate-components-handlers.driver";

describe("generate-events", () => {
  let driver: Driver;
  beforeEach(() => {
    driver = getDriver();
  });

  it("should return a .d.ts file with handler declarations", () => {
    driver.given.mockDeclarationsFile();

    const viewportEvents = driver.get.componentByName("ViewportMixin");
    const viewportEventNames = driver.get.getComponentHandlersNames(
      "ViewportMixin"
    );

    expect(viewportEvents).toBeDefined();
    expect(viewportEventNames).toEqual([
      "onViewportEnter(handler: $w.EventHandler): $w.Element;",
      "onViewportLeave(handler: $w.EventHandler): $w.Element;"
    ]);
  });

  it("should declare the direct event handlers", () => {
    driver.given.mockDeclarationsFile();

    const elementHandlers = driver.get.getComponentHandlersNames("Element");

    expect(elementHandlers).toEqual([
      "onMouseIn(handler: $w.MouseEventHandler): $w.Element;",
      "onMouseOut(handler: $w.MouseEventHandler): $w.Element;",
      "onViewportEnter(handler: $w.EventHandler): $w.Element;",
      "onViewportLeave(handler: $w.EventHandler): $w.Element;"
    ]);
  });

  it("should search recursivley for handlers", () => {
    driver.given.mockDeclarationsFile();

    const elementHandlers = driver.get.getComponentHandlersNames("Chatbox");

    expect(elementHandlers).toEqual([
      "onMouseIn(handler: $w.MouseEventHandler): $w.Element;",
      "onMouseOut(handler: $w.MouseEventHandler): $w.Element;",
      "onViewportEnter(handler: $w.EventHandler): $w.Element;",
      "onViewportLeave(handler: $w.EventHandler): $w.Element;"
    ]);
  });

  it("should return an object with all the handler details", () => {
    driver.given.mockDeclarationsFile();

    const onViewPortEnterDocumentation = driver.get.getMethodDocumentation(
      "Button",
      "onViewportEnter"
    );

    expect(onViewPortEnterDocumentation).toBe(
      "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)"
    );
  });
});
