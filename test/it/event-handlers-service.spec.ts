import eventHandlersService from "../../src/dynamicTypes/eventHandlersService";

describe("eventHandlersService", () => {
  it("should allow getting a $w component event handlers", () => {
    const buttonHandlers = eventHandlersService.getComponentEventHandlers(
      "$w.Button"
    );
    expect(buttonHandlers).toHaveLength(6);

    const onClickHandler = buttonHandlers?.find(
      handler => handler.name === "onClick"
    );
    expect(onClickHandler).not.toBe(undefined);
  });

  it("should allow adding component event handlers in runtime", () => {
    eventHandlersService.registerComponentEventHandlers("MyComponent", [
      {
        name: "CustomEvent",
        origin: "MyComponent",
        description: "My custom event",
        kind: "function",
        type: "customEvent",
        handlerArgs: [
          {
            name: "arg",
            type: "string"
          }
        ]
      }
    ]);
    const handlers = eventHandlersService.getComponentEventHandlers(
      "MyComponent"
    );
    expect(handlers).toHaveLength(1);

    const customHandler = handlers?.find(
      handler => handler.name === "CustomEvent"
    );
    expect(customHandler).not.toBe(undefined);
  });
});
