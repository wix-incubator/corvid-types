declare namespace $wEventHandlers {
    interface Chatbox {
        /**
         * **Note: This standard element event is not relevant for Chatbox.**
            [Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * **Note: This standard element event is not relevant for Chatbox.**
            [Read more](https://www.wix.com/corvid/reference/$w.Chatbox.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface PostPage {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface AccountNavBar {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface Anchor {
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface Box {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface Button {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface Checkbox {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface CheckboxGroup {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface ClickableMixin {
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface Column {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface ColumnStrip {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface Container {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface DatePicker {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface Dropdown {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface Element {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface FocusMixin {
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
    }
    interface Footer {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface Form {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface FormElement {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
    }
    interface Gallery {
        /**
         * Adds an event handler that runs when a gallery's current item changes.
            [Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#onCurrentItemChanged)
        * @eventType imageChanged
        */
        onCurrentItemChanged(handler: $w.GalleryItemChangedEventHandler): $w.Gallery;
        /**
         * Adds an event handler that runs when an item in a gallery is
         clicked.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/code/home/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
            [Read more](https://www.wix.com/corvid/reference/$w.Gallery.html#onItemClicked)
        * @eventType itemClicked
        */
        onItemClicked(handler: $w.GalleryItemClickedEventHandler): $w.Gallery;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when playback is paused.
            [Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#onPause)
        * @eventType autoplayOff
        */
        onPause(handler: $w.EventHandler): $w.Gallery & $w.Slideshow;
        /**
         * Adds an event handler that runs when playback is started or restarted.
            [Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#onPlay)
        * @eventType autoplayOn
        */
        onPlay(handler: $w.EventHandler): $w.Gallery & $w.Slideshow;
    }
    interface GoogleMap {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface Header {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface HiddenCollapsedElement {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface HtmlComponent {
        /**
         * Adds an event handler that runs when the HTML Component
         sends a message.
            [Read more](https://www.wix.com/corvid/reference/$w.HtmlComponent.html#onMessage)
        * @eventType message
        */
        onMessage(handler: $w.HtmlComponentMessageEventHandler): $w.HtmlComponent;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface IFrame {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface Image {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface MediaBox {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface Menu {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface MenuContainer {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface MultiStateBox {
        /**
         * Adds an event handler that runs when the multi-state box moves to a new state.
            [Read more](https://www.wix.com/corvid/reference/$w.MultiStateBox.html#onChange)
        * @eventType change
        */
        onChange(eventHandler: $w.EventHandler): $w.MultiStateBox;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface Page {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface PlayableMixin {
        /**
         * Adds an event handler that runs when playback is paused.
            [Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#onPause)
        * @eventType autoplayOff
        */
        onPause(handler: $w.EventHandler): $w.Gallery & $w.Slideshow;
        /**
         * Adds an event handler that runs when playback is started or restarted.
            [Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#onPlay)
        * @eventType autoplayOn
        */
        onPlay(handler: $w.EventHandler): $w.Gallery & $w.Slideshow;
    }
    interface QuickActionBar {
        /**
         * Adds an event handler that runs when an item in a quick action bar is
         clicked.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/code/home/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
            [Read more](https://www.wix.com/corvid/reference/$w.QuickActionBar.html#onItemClicked)
        * @eventType itemClicked
        */
        onItemClicked(handler: $w.QuickActionBarItemClickedEventHandler): $w.QuickActionBar;
    }
    interface RadioButtonGroup {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface Repeater {
        /**
         * Sets the function that runs when a new repeated item is created.
            [Read more](https://www.wix.com/corvid/reference/$w.Repeater.html#onItemReady)
        * @eventType itemReady
        */
        onItemReady(handler: $w.ItemReadyEventHandler): $w.Repeater;
        /**
         * Sets the function that runs when a repeated item is removed.
            [Read more](https://www.wix.com/corvid/reference/$w.Repeater.html#onItemRemoved)
        * @eventType itemRemoved
        */
        onItemRemoved(handler: $w.ItemRemovedEventHandler): $w.Repeater;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface Slide {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface Slideshow {
        /**
         * Adds an event handler that runs when the slideshow moves to a new slide.
            [Read more](https://www.wix.com/corvid/reference/$w.Slideshow.html#onChange)
        * @eventType change
        */
        onChange(eventHandler: $w.EventHandler): $w.Slideshow;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when playback is paused.
            [Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#onPause)
        * @eventType autoplayOff
        */
        onPause(handler: $w.EventHandler): $w.Gallery & $w.Slideshow;
        /**
         * Adds an event handler that runs when playback is started or restarted.
            [Read more](https://www.wix.com/corvid/reference/$w.PlayableMixin.html#onPlay)
        * @eventType autoplayOn
        */
        onPlay(handler: $w.EventHandler): $w.Gallery & $w.Slideshow;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface State {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface Table {
        /**
         * Adds an event handler that runs when a table cell is selected.
            [Read more](https://www.wix.com/corvid/reference/$w.Table.html#onCellSelect)
        * @eventType cellSelect
        */
        onCellSelect(eventHandler: $w.TableCellEventHandler): $w.Table;
        /**
         * Adds an event handler that runs when the table's data is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.Table.html#onDataChange)
        * @eventType dataChange
        */
        onDataChange(eventHandler: $w.EventHandler): void;
        /**
         * Adds an event handler that runs when a table row is selected.
            [Read more](https://www.wix.com/corvid/reference/$w.Table.html#onRowSelect)
        * @eventType rowSelect
        */
        onRowSelect(eventHandler: $w.TableRowEventHandler): $w.Table;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface Text {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface TextBox {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the input element receives
        input.
            [Read more](https://www.wix.com/corvid/reference/$w.TextInputMixin.html#onInput)
        * @eventType onInput
        */
        onInput(eventHandler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the cursor is inside the
         input element and a key is pressed.
            [Read more](https://www.wix.com/corvid/reference/$w.TextInputMixin.html#onKeyPress)
        * @eventType keyPress
        */
        onKeyPress(eventHandler: $w.KeyboardEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface TextInput {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the input element receives
        input.
            [Read more](https://www.wix.com/corvid/reference/$w.TextInputMixin.html#onInput)
        * @eventType onInput
        */
        onInput(eventHandler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the cursor is inside the
         input element and a key is pressed.
            [Read more](https://www.wix.com/corvid/reference/$w.TextInputMixin.html#onKeyPress)
        * @eventType keyPress
        */
        onKeyPress(eventHandler: $w.KeyboardEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface TextInputMixin {
        /**
         * Adds an event handler that runs when the input element receives
        input.
            [Read more](https://www.wix.com/corvid/reference/$w.TextInputMixin.html#onInput)
        * @eventType onInput
        */
        onInput(eventHandler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the cursor is inside the
         input element and a key is pressed.
            [Read more](https://www.wix.com/corvid/reference/$w.TextInputMixin.html#onKeyPress)
        * @eventType keyPress
        */
        onKeyPress(eventHandler: $w.KeyboardEventHandler): $w.Element;
    }
    interface UploadButton {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
    }
    interface ValueMixin {
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
    }
    interface VectorImage {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface Video {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface VideoBox {
        /**
         * Adds an event handler that runs when the playback has ended.
            [Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onEnded)
        * @eventType onEnded
        */
        onEnded(handler: $w.EventHandler): $w.VideoBox;
        /**
         * **Note: This standard element property is not relevant for VideoBox.**
            [Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * **Note: This standard element property is not relevant for VideoBox.**
            [Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the playback is paused.
            [Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onPause)
        * @eventType onPause
        */
        onPause(handler: $w.EventHandler): $w.VideoBox;
        /**
         * Adds an event handler that runs when the playback is started or restarted.
            [Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onPlay)
        * @eventType onPlay
        */
        onPlay(handler: $w.EventHandler): $w.VideoBox;
        /**
         * Adds an event handler that runs when the playback progresses.
            [Read more](https://www.wix.com/corvid/reference/$w.VideoBox.html#onProgress)
        * @eventType onProgress
        */
        onProgress(handler: $w.EventHandler): $w.VideoBox;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface ViewportMixin {
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface WixForms {
        /**
         * Adds an event handler that runs when a site visitor starts to submit a Wix Form yet before the form is actually submitted and sent to the server.
            [Read more](https://www.wix.com/corvid/reference/$w.WixForms.html#onWixFormSubmit)
        * @eventType WixFormSubmitEvent
        */
        onWixFormSubmit(eventHandler: $w.WixForms.WixFormSubmitEventHandler): void;
        /**
         * Adds an event handler that runs when a site visitor submits a Wix Form and it is successfully received by the server.
            [Read more](https://www.wix.com/corvid/reference/$w.WixForms.html#onWixFormSubmitted)
        * @eventType WixFormSubmittedEvent
        */
        onWixFormSubmitted(eventHandler: $w.WixForms.WixFormSubmittedEventHandler): void;
        /**
         * Adds an event handler that runs when a site visitor is not able to successfully submit a Wix Form to the server.
            [Read more](https://www.wix.com/corvid/reference/$w.WixForms.html#onWixFormSubmittedError)
        * @eventType WixFormSubmittedErrorEvent
        */
        onWixFormSubmittedError(eventHandler: $w.WixForms.WixFormSubmittedErrorEventHandler): void;
    }
    interface AddressInput {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface AudioPlayer {
        /**
         * Adds an event handler that runs when playback has ended.
            [Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#onEnded)
        * @eventType onEnded
        */
        onEnded(handler: $w.EventHandler): $w.AudioPlayer;
        /**
         * Adds an event handler that runs when playback is paused.
            [Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#onPause)
        * @eventType onPause
        */
        onPause(handler: $w.EventHandler): $w.AudioPlayer;
        /**
         * Adds an event handler that runs when playback is started or restarted.
            [Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#onPlay)
        * @eventType onPlay
        */
        onPlay(handler: $w.EventHandler): $w.AudioPlayer;
        /**
         * Adds an event handler that runs when playback progresses.
            [Read more](https://www.wix.com/corvid/reference/$w.AudioPlayer.html#onProgress)
        * @eventType onProgress
        */
        onProgress(handler: $w.EventHandler): $w.AudioPlayer;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface Captcha {
        /**
         * Adds an event handler that runs when a connection error occurs while completing the CAPTCHA challenge.
            [Read more](https://www.wix.com/corvid/reference/$w.Captcha.html#onError)
        * @eventType onError
        */
        onError(handler: $w.Captcha.ErrorHandler): void;
        /**
         * Adds an event handler that runs when the CAPTCHA token expires.
            [Read more](https://www.wix.com/corvid/reference/$w.Captcha.html#onTimeout)
        * @eventType onTimeout
        */
        onTimeout(handler: $w.Captcha.TimeoutHandler): void;
        /**
         * Adds an event handler that runs when the CAPTCHA challenge is successfully completed.
            [Read more](https://www.wix.com/corvid/reference/$w.Captcha.html#onVerified)
        * @eventType onVerified
        */
        onVerified(handler: $w.Captcha.VerifiedHandler): void;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
    }
    interface CustomElement {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface Pagination {
        /**
         * Adds an event handler that runs when the pagination bar
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.Pagination.html#onChange)
        * @eventType Change
        */
        onChange(handler: $w.EventHandler): $w.Pagination;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface ProgressBar {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface RatingsDisplay {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface RatingsInput {
        /**
         * Sets the function that runs when a user's mouse enters one of the rating icons.
            [Read more](https://www.wix.com/corvid/reference/$w.RatingsInput.html#onIconMouseIn)
        * @eventType IconMouseIn
        */
        onIconMouseIn(handler: $w.IconMouseInEventHandler): $w.RatingsInput;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface RichTextBox {
        /**
         * **This standard element function is not supported for RichTextBox.**
            [Read more](https://www.wix.com/corvid/reference/$w.RichTextBox.html#onInput)
        * @eventType onInput
        */
        onInput(eventHandler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the input element receives
        input.
            [Read more](https://www.wix.com/corvid/reference/$w.TextInputMixin.html#onInput)
        * @eventType onInput
        */
        onInput(eventHandler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the cursor is inside the
         input element and a key is pressed.
            [Read more](https://www.wix.com/corvid/reference/$w.TextInputMixin.html#onKeyPress)
        * @eventType keyPress
        */
        onKeyPress(eventHandler: $w.KeyboardEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface SelectionTags {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }
    interface SignatureInput {
        /**
         * Adds an event handler that runs when a signature input element's value
         is changed by a site visitor.
            [Read more](https://www.wix.com/corvid/reference/$w.SignatureInput.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.SignatureInput;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
    }
    interface Slider {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
    }
    interface Switch {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
        * @eventType click
        */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
            [Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick)
        * @eventType dblClick
        */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
    }
    interface TimePicker {
        /**
         * Adds an event handler that runs when the element loses focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onBlur)
        * @eventType blur
        */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
            [Read more](https://www.wix.com/corvid/reference/$w.FocusMixin.html#onFocus)
        * @eventType focus
        */
        onFocus(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an input element's value
         is changed.
            [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
        * @eventType change
        */
        onChange(handler: $w.EventHandler): $w.Element;
    }
    interface VideoPlayer {
        /**
         * Adds an event handler that runs when playback has ended.
            [Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#onEnded)
        * @eventType onEnded
        */
        onEnded(handler: $w.EventHandler): $w.VideoPlayer;
        /**
         * Adds an event handler that runs when playback is paused.
            [Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#onPause)
        * @eventType onPause
        */
        onPause(handler: $w.EventHandler): $w.VideoPlayer;
        /**
         * Adds an event handler that runs when playback is started or restarted.
            [Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#onPlay)
        * @eventType onPlay
        */
        onPlay(handler: $w.EventHandler): $w.VideoPlayer;
        /**
         * Adds an event handler that runs when playback progresses.
            [Read more](https://www.wix.com/corvid/reference/$w.VideoPlayer.html#onProgress)
        * @eventType onProgress
        */
        onProgress(handler: $w.EventHandler): $w.VideoPlayer;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface CartIcon {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface ProductPage {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
    interface ThankYouPage {
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         onto the element.
        
        > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
        > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
        > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
        > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
        * @eventType mouseenter
        */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         off of the element.
        
         > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
         > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
         > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
         > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
        
         You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
            [Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut)
        * @eventType mouseleave
        */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is displayed
         in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
        * @eventType viewportEnter
        */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         displayed in the viewable part of the current window.
            [Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
        * @eventType viewportLeave
        */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }
}
