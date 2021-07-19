import { ComponentDefinitionsMap } from "../../scripts/generate-components-handlers/generate-components-handlers";
const ComponentsHandlers: ComponentDefinitionsMap = {
  Chatbox: {
    name: "Chatbox",
    handlers: [
      {
        name: "onMaximize",
        origin: "Chatbox",
        description:
          "An event that fires when the chatbox is maximized.\n\t[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#onMaximize)",
        kind: "function",
        handlerArgs: []
      },
      {
        name: "onMessageReceived",
        origin: "Chatbox",
        description:
          "An event that fires when a site visitor receives a chat message.\n\t[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#onMessageReceived)",
        kind: "function",
        handlerArgs: [{ name: "message", type: "$w.Chatbox.Message" }]
      },
      {
        name: "onMessageSent",
        origin: "Chatbox",
        description:
          "An event that fires when a site visitor sends a chat message.\n\t[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#onMessageSent)",
        kind: "function",
        handlerArgs: [{ name: "message", type: "$w.Chatbox.Message" }]
      },
      {
        name: "onMinimize",
        origin: "Chatbox",
        description:
          "An event that fires when the chatbox is minimized.\n\t[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#onMinimize)",
        kind: "function",
        handlerArgs: []
      },
      {
        name: "onViewportEnter",
        origin: "Chatbox",
        description:
          "**Note: This standard element event is not relevant for Chatbox.**\n\t[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Chatbox",
        description:
          "**Note: This standard element event is not relevant for Chatbox.**\n\t[Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onMouseIn",
        origin: "Chatbox",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Chatbox",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  PostPage: {
    name: "PostPage",
    handlers: [
      {
        name: "onMouseIn",
        origin: "PostPage",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "PostPage",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "PostPage",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "PostPage",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  AccountNavBar: {
    name: "AccountNavBar",
    handlers: [
      {
        name: "onMouseIn",
        origin: "AccountNavBar",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "AccountNavBar",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "AccountNavBar",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "AccountNavBar",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  Anchor: {
    name: "Anchor",
    handlers: [
      {
        name: "onViewportEnter",
        origin: "Anchor",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Anchor",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  Box: {
    name: "Box",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Box",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Box",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Box",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Box",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "Box",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "Box",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  Button: {
    name: "Button",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Button",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Button",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Button",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Button",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "Button",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "Button",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  Column: {
    name: "Column",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Column",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Column",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Column",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Column",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "Column",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "Column",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  ColumnStrip: {
    name: "ColumnStrip",
    handlers: [
      {
        name: "onMouseIn",
        origin: "ColumnStrip",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "ColumnStrip",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "ColumnStrip",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "ColumnStrip",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "ColumnStrip",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "ColumnStrip",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  Container: {
    name: "Container",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Container",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Container",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Container",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Container",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "Container",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "Container",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  Element: {
    name: "Element",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Element",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Element",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Element",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Element",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  Footer: {
    name: "Footer",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Footer",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Footer",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Footer",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Footer",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "Footer",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "Footer",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  Form: {
    name: "Form",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Form",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Form",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Form",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Form",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "Form",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "Form",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  FormElement: {
    name: "FormElement",
    handlers: [
      {
        name: "onMouseIn",
        origin: "FormElement",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "FormElement",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "FormElement",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "FormElement",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onCustomValidation",
        origin: "FormElement",
        description:
          "Adds an event handler that runs when the element's validation is checked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ValidatableMixin.html#onCustomValidation)",
        kind: "function",
        handlerArgs: [{ name: "validator", type: "$w.Validator" }]
      },
      {
        name: "onChange",
        origin: "FormElement",
        description:
          "Adds an event handler that runs when an input element's value\n is changed.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  Gallery: {
    name: "Gallery",
    handlers: [
      {
        name: "onCurrentItemChanged",
        origin: "Gallery",
        description:
          "Adds an event handler that runs when a gallery's current item changes.\n\t[Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#onCurrentItemChanged)",
        kind: "function",
        handlerArgs: [
          { name: "handler", type: "$w.GalleryItemChangedEventHandler" }
        ]
      },
      {
        name: "onItemClicked",
        origin: "Gallery",
        description:
          "Adds an event handler that runs when an item in a gallery is\n clicked.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/code/home/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#onItemClicked)",
        kind: "function",
        handlerArgs: [
          { name: "handler", type: "$w.GalleryItemClickedEventHandler" }
        ]
      },
      {
        name: "onMouseIn",
        origin: "Gallery",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Gallery",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Gallery",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Gallery",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onPause",
        origin: "Gallery",
        description:
          "Adds an event handler that runs when playback is paused.\n\t[Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#onPause)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onPlay",
        origin: "Gallery",
        description:
          "Adds an event handler that runs when playback is started or restarted.\n\t[Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#onPlay)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  GoogleMap: {
    name: "GoogleMap",
    handlers: [
      {
        name: "onMouseIn",
        origin: "GoogleMap",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "GoogleMap",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "GoogleMap",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "GoogleMap",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  Header: {
    name: "Header",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Header",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Header",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Header",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Header",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "Header",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "Header",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  HiddenCollapsedElement: {
    name: "HiddenCollapsedElement",
    handlers: [
      {
        name: "onMouseIn",
        origin: "HiddenCollapsedElement",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "HiddenCollapsedElement",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "HiddenCollapsedElement",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "HiddenCollapsedElement",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  IFrame: {
    name: "IFrame",
    handlers: [
      {
        name: "onMouseIn",
        origin: "IFrame",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "IFrame",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "IFrame",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "IFrame",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  Image: {
    name: "Image",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Image",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Image",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Image",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Image",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "Image",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "Image",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  MediaBox: {
    name: "MediaBox",
    handlers: [
      {
        name: "onMouseIn",
        origin: "MediaBox",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "MediaBox",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "MediaBox",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "MediaBox",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  Menu: {
    name: "Menu",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Menu",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Menu",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Menu",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Menu",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  MenuContainer: {
    name: "MenuContainer",
    handlers: [
      {
        name: "onMouseIn",
        origin: "MenuContainer",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "MenuContainer",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "MenuContainer",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "MenuContainer",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  MultiStateBox: {
    name: "MultiStateBox",
    handlers: [
      {
        name: "onChange",
        origin: "MultiStateBox",
        description:
          "Adds an event handler that runs when the multi-state box moves to a new state.\n\t[Read more](https://www.wix.com/corvid/reference/$w.MultiStateBox.html#onChange)",
        kind: "function",
        handlerArgs: [{ name: "eventHandler", type: "$w.EventHandler" }]
      },
      {
        name: "onMouseIn",
        origin: "MultiStateBox",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "MultiStateBox",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "MultiStateBox",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "MultiStateBox",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "MultiStateBox",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "MultiStateBox",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  Page: {
    name: "Page",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Page",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Page",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Page",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Page",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "Page",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "Page",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  Repeater: {
    name: "Repeater",
    handlers: [
      {
        name: "onItemReady",
        origin: "Repeater",
        description:
          "Sets the function that runs when a new repeated item is created.\n\t[Read more](https://www.wix.com/corvid/reference/$w.Repeater.html#onItemReady)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.ItemReadyEventHandler" }]
      },
      {
        name: "onItemRemoved",
        origin: "Repeater",
        description:
          "Sets the function that runs when a repeated item is removed.\n\t[Read more](https://www.wix.com/corvid/reference/$w.Repeater.html#onItemRemoved)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.ItemRemovedEventHandler" }]
      },
      {
        name: "onMouseIn",
        origin: "Repeater",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Repeater",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Repeater",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Repeater",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  Slide: {
    name: "Slide",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Slide",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Slide",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Slide",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Slide",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  Slideshow: {
    name: "Slideshow",
    handlers: [
      {
        name: "onChange",
        origin: "Slideshow",
        description:
          "Adds an event handler that runs when the slideshow moves to a new slide.\n\t[Read more](https://www.wix.com/corvid/reference/$w.Slideshow.html#onChange)",
        kind: "function",
        handlerArgs: [{ name: "eventHandler", type: "$w.EventHandler" }]
      },
      {
        name: "onMouseIn",
        origin: "Slideshow",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Slideshow",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Slideshow",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Slideshow",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onPause",
        origin: "Slideshow",
        description:
          "Adds an event handler that runs when playback is paused.\n\t[Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#onPause)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onPlay",
        origin: "Slideshow",
        description:
          "Adds an event handler that runs when playback is started or restarted.\n\t[Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#onPlay)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "Slideshow",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "Slideshow",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  State: {
    name: "State",
    handlers: [
      {
        name: "onMouseIn",
        origin: "State",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "State",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "State",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "State",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  Table: {
    name: "Table",
    handlers: [
      {
        name: "onCellSelect",
        origin: "Table",
        description:
          "Adds an event handler that runs when a table cell is selected.\n\t[Read more](https://www.wix.com/corvid/reference/$w.Table.html#onCellSelect)",
        kind: "function",
        handlerArgs: [
          { name: "eventHandler", type: "$w.TableCellEventHandler" }
        ]
      },
      {
        name: "onDataChange",
        origin: "Table",
        description:
          "Adds an event handler that runs when the table's data is changed.\n\t[Read more](https://www.wix.com/corvid/reference/$w.Table.html#onDataChange)",
        kind: "function",
        handlerArgs: [{ name: "eventHandler", type: "$w.EventHandler" }]
      },
      {
        name: "onRowSelect",
        origin: "Table",
        description:
          "Adds an event handler that runs when a table row is selected.\n\t[Read more](https://www.wix.com/corvid/reference/$w.Table.html#onRowSelect)",
        kind: "function",
        handlerArgs: [{ name: "eventHandler", type: "$w.TableRowEventHandler" }]
      },
      {
        name: "onMouseIn",
        origin: "Table",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Table",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Table",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Table",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "Table",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "Table",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  Text: {
    name: "Text",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Text",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Text",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Text",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Text",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "Text",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "Text",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  VectorImage: {
    name: "VectorImage",
    handlers: [
      {
        name: "onMouseIn",
        origin: "VectorImage",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "VectorImage",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "VectorImage",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "VectorImage",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "VectorImage",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "VectorImage",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  Video: {
    name: "Video",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Video",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Video",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Video",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Video",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  VideoBox: {
    name: "VideoBox",
    handlers: [
      {
        name: "onEnded",
        origin: "VideoBox",
        description:
          "Adds an event handler that runs when the playback has ended.\n\t[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onEnded)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onMouseIn",
        origin: "VideoBox",
        description:
          "**Note: This standard element property is not relevant for VideoBox.**\n\t[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "VideoBox",
        description:
          "**Note: This standard element property is not relevant for VideoBox.**\n\t[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onPause",
        origin: "VideoBox",
        description:
          "Adds an event handler that runs when the playback is paused.\n\t[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onPause)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onPlay",
        origin: "VideoBox",
        description:
          "Adds an event handler that runs when the playback is started or restarted.\n\t[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onPlay)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onProgress",
        origin: "VideoBox",
        description:
          "Adds an event handler that runs when the playback progresses.\n\t[Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onProgress)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "VideoBox",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "VideoBox",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  AudioPlayer: {
    name: "AudioPlayer",
    handlers: [
      {
        name: "onEnded",
        origin: "AudioPlayer",
        description:
          "Adds an event handler that runs when playback has ended.\n\t[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#onEnded)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onPause",
        origin: "AudioPlayer",
        description:
          "Adds an event handler that runs when playback is paused.\n\t[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#onPause)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onPlay",
        origin: "AudioPlayer",
        description:
          "Adds an event handler that runs when playback is started or restarted.\n\t[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#onPlay)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onProgress",
        origin: "AudioPlayer",
        description:
          "Adds an event handler that runs when playback progresses.\n\t[Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#onProgress)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onMouseIn",
        origin: "AudioPlayer",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "AudioPlayer",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "AudioPlayer",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "AudioPlayer",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  Captcha: {
    name: "Captcha",
    handlers: [
      {
        name: "onError",
        origin: "Captcha",
        description:
          "Adds an event handler that runs when a connection error occurs while completing the CAPTCHA challenge.\n\t[Read more](https://www.wix.com/corvid/reference/$w.Captcha.html#onError)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.Captcha.ErrorHandler" }]
      },
      {
        name: "onTimeout",
        origin: "Captcha",
        description:
          "Adds an event handler that runs when the CAPTCHA token expires.\n\t[Read more](https://www.wix.com/corvid/reference/$w.Captcha.html#onTimeout)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.Captcha.TimeoutHandler" }]
      },
      {
        name: "onVerified",
        origin: "Captcha",
        description:
          "Adds an event handler that runs when the CAPTCHA challenge is successfully completed.\n\t[Read more](https://www.wix.com/corvid/reference/$w.Captcha.html#onVerified)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.Captcha.VerifiedHandler" }]
      },
      {
        name: "onMouseIn",
        origin: "Captcha",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Captcha",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Captcha",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Captcha",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onBlur",
        origin: "Captcha",
        description:
          "Adds an event handler that runs when the element loses focus.\n\t[Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onFocus",
        origin: "Captcha",
        description:
          "Adds an event handler that runs when the element receives focus.\n\t[Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  CustomElement: {
    name: "CustomElement",
    handlers: [
      {
        name: "onMouseIn",
        origin: "CustomElement",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "CustomElement",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "CustomElement",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "CustomElement",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  Pagination: {
    name: "Pagination",
    handlers: [
      {
        name: "onChange",
        origin: "Pagination",
        description:
          "Adds an event handler that runs when the pagination bar\n is changed.\n\t[Read more](https://www.wix.com/corvid/reference/$w.Pagination.html#onChange)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onMouseIn",
        origin: "Pagination",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Pagination",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Pagination",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Pagination",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "Pagination",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "Pagination",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  ProgressBar: {
    name: "ProgressBar",
    handlers: [
      {
        name: "onMouseIn",
        origin: "ProgressBar",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "ProgressBar",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "ProgressBar",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "ProgressBar",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  RatingsDisplay: {
    name: "RatingsDisplay",
    handlers: [
      {
        name: "onMouseIn",
        origin: "RatingsDisplay",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "RatingsDisplay",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "RatingsDisplay",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "RatingsDisplay",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "RatingsDisplay",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "RatingsDisplay",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      }
    ]
  },
  Slider: {
    name: "Slider",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Slider",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Slider",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Slider",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Slider",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onChange",
        origin: "Slider",
        description:
          "Adds an event handler that runs when an input element's value\n is changed.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onBlur",
        origin: "Slider",
        description:
          "Adds an event handler that runs when the element loses focus.\n\t[Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onFocus",
        origin: "Slider",
        description:
          "Adds an event handler that runs when the element receives focus.\n\t[Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  Switch: {
    name: "Switch",
    handlers: [
      {
        name: "onMouseIn",
        origin: "Switch",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "Switch",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "Switch",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "Switch",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onBlur",
        origin: "Switch",
        description:
          "Adds an event handler that runs when the element loses focus.\n\t[Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onFocus",
        origin: "Switch",
        description:
          "Adds an event handler that runs when the element receives focus.\n\t[Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onClick",
        origin: "Switch",
        description:
          "Adds an event handler that runs when the element is clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onDblClick",
        origin: "Switch",
        description:
          "Adds an event handler that runs when the element is double-clicked.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onChange",
        origin: "Switch",
        description:
          "Adds an event handler that runs when an input element's value\n is changed.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  VideoPlayer: {
    name: "VideoPlayer",
    handlers: [
      {
        name: "onEnded",
        origin: "VideoPlayer",
        description:
          "Adds an event handler that runs when playback has ended.\n\t[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#onEnded)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onPause",
        origin: "VideoPlayer",
        description:
          "Adds an event handler that runs when playback is paused.\n\t[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#onPause)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onPlay",
        origin: "VideoPlayer",
        description:
          "Adds an event handler that runs when playback is started or restarted.\n\t[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#onPlay)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onProgress",
        origin: "VideoPlayer",
        description:
          "Adds an event handler that runs when playback progresses.\n\t[Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#onProgress)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onMouseIn",
        origin: "VideoPlayer",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "VideoPlayer",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "VideoPlayer",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "VideoPlayer",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  CartIcon: {
    name: "CartIcon",
    handlers: [
      {
        name: "onMouseIn",
        origin: "CartIcon",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "CartIcon",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "CartIcon",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "CartIcon",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  ProductPage: {
    name: "ProductPage",
    handlers: [
      {
        name: "onMouseIn",
        origin: "ProductPage",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "ProductPage",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "ProductPage",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "ProductPage",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  },
  ThankYouPage: {
    name: "ThankYouPage",
    handlers: [
      {
        name: "onMouseIn",
        origin: "ThankYouPage",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n onto the element.\n\n> **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n> a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n> and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n> [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onMouseOut",
        origin: "ThankYouPage",
        description:
          "Adds an event handler that runs when the mouse pointer is moved\n off of the element.\n\n > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get\n > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function\n > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see\n > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).\n\n You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).\n\t[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.MouseEventHandler" }]
      },
      {
        name: "onViewportEnter",
        origin: "ThankYouPage",
        description:
          "Adds an event handler that runs when an element is displayed\n in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      },
      {
        name: "onViewportLeave",
        origin: "ThankYouPage",
        description:
          "Adds an event handler that runs when an element is no longer\n displayed in the viewable part of the current window.\n\t[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)",
        kind: "function",
        handlerArgs: [{ name: "handler", type: "$w.EventHandler" }]
      }
    ]
  }
};
export default ComponentsHandlers;
