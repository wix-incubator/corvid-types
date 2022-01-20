/** This d.ts content was partially taken from common/declaration.dts
 * It is not whole and may not be up to date, it is simply here as a testing fixture
 */

 declare namespace $w {
  interface Element extends Node, ViewportMixin {
    readonly rendered: boolean;

     /**
     * Adds an event handler that runs when the mouse pointer is moved
     *  onto the element.
     * 
     * > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
     * > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
     * > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
     * > [here](https://www.wix.com/velo/forum/wix-tips-and-updates/removal-of-the-w-parameter-from-event-handlers).
     * 
     *  You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
     * 	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn) 
     *  @eventType mouseenter
     */
     onMouseIn(handler: MouseEventHandler): Element;

      /**
      * Adds an event handler that runs when the mouse pointer is moved
      *  off of the element.
      * 
      *  > **Deprecation note:** The $w parameter of event handlers is being deprecated. To get
      *  > a scoped selector for working with elements in repeater items, use the [$w.at()]($w.html#at) function
      *  > and pass it the context property of the event parameter: `$item = $w.at(event.context)`. To learn more, see
      *  > [here](https://www.wix.com/velo/forum/tips-tutorials-examples/removal-of-the-w-parameter-from-event-handlers).
      * 
      *  You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
      * 	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut) 
      *  @eventType mouseleave
      */
     onMouseOut(handler: MouseEventHandler): Element;
  };
  
  interface Event {
      readonly target: Element;
      readonly type: string;
  }

  type MouseEventHandler = (event: MouseEvent, $w: $w) => void;
  type EventHandler = (event: Event) => void;

  interface ClickableMixin {
      /**
       * Adds an event handler that runs when the element is clicked.
       * 	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick) 
       *  @eventType click
       */
      onClick(handler: MouseEventHandler): Element;

      /**
      * Adds an event handler that runs when the element is double-clicked.
      * 	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick) 
      *  @eventType dblClick
      */
      onDblClick(handler: MouseEventHandler): Element;
  }

  interface ViewportMixin {

     /**
     * Adds an event handler that runs when an element is displayed
     *  in the viewable part of the current window.
     * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter) 
     *  @eventType viewportEnter
     */
     onViewportEnter(handler: EventHandler): Element;
     /**
     * Adds an event handler that runs when an element is no longer
     *  displayed in the viewable part of the current window.
     * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave) 
     *  @eventType viewportLeave
     */
     onViewportLeave(handler: EventHandler): Element;
  }

  interface Chatbox extends Element, HiddenMixin {
      readonly global: boolean;
      readonly hidden: boolean;
      readonly isVisible: boolean;
      readonly maximized: boolean;
      readonly parent: Node;
      focusChannel(channelInfo: Chatbox.ChannelInfo): Promise<void>;
      getChannel(channelInfo: Chatbox.ChannelInfo): Promise<Chatbox.Channel>;
      getChannelList(): Promise<Chatbox.Channel[]>;
      maximize(): Promise<void>;
      minimize(): Promise<void>;
      onMaximize(): void;

      /**
       * onMessageReceived
       *  @eventType messageReceived
       */
      onMessageReceived(message: Chatbox.Message): void;

      /**
       * onMessageSent
       *  @eventType messageSent
       */
      onMessageSent(message: Chatbox.Message): void;
      onMinimize(): void;
      onViewportEnter(handler: EventHandler): Element;
      onViewportLeave(handler: EventHandler): Element;
      scrollTo(): Promise<void>;
      sendMessage(messageInfo: Chatbox.MessageInfo): Promise<void>;
  }

  interface Anchor extends Node, ViewportMixin {
    readonly name: string;
  }

  interface Button extends Element, ClickableMixin, StyleMixin, LabelMixin {
    label: string;
    link: string;
  }

  interface ValidatableMixin {
    readonly valid: boolean;
    readonly validationMessage: string;
    onCustomValidation(): void;
    resetValidityIndication(): void;
    updateValidityIndication(): void;
  }

  interface FormElement extends Element, ValidatableMixin {
  }

  interface DatePicker extends FormElement, FocusMixin, ClickableMixin {
    disabledDates: Date[];
    disabledDaysOfWeek: number[];
    maxDate: Date;
    minDate: Date;
    value: Date;
  }
 }