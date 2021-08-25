/** This d.ts content was partially taken from common/declaration.dts
 * It is not whole and may not be up to date, it is simply here as a testing fixture
 */

 declare namespace $w {
  interface Element extends $w.Node, $w.ViewportMixin {
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
     onMouseIn(handler: $w.MouseEventHandler): $w.Element;

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
     onMouseOut(handler: $w.MouseEventHandler): $w.Element;
  };
  
  interface Event {
      readonly target: $w.Element;
      readonly type: string;
  }

  type EventHandler = (event: $w.Event) => void;

  interface ClickableMixin {
      /**
       * Adds an event handler that runs when the element is clicked.
       * 	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick) 
       *  @eventType click
       */
      onClick(handler: $w.MouseEventHandler): $w.Element;

      /**
      * Adds an event handler that runs when the element is double-clicked.
      * 	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onDblClick) 
      *  @eventType dblClick
      */
      onDblClick(handler: $w.MouseEventHandler): $w.Element;
  }

  interface ViewportMixin {

     /**
     * Adds an event handler that runs when an element is displayed
     *  in the viewable part of the current window.
     * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter) 
     *  @eventType viewportEnter
     */
     onViewportEnter(handler: $w.EventHandler): $w.Element;
     /**
     * Adds an event handler that runs when an element is no longer
     *  displayed in the viewable part of the current window.
     * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave) 
     *  @eventType viewportLeave
     */
     onViewportLeave(handler: $w.EventHandler): $w.Element;
  }

  interface Chatbox extends $w.Element, $w.HiddenMixin {
      readonly global: boolean;
      readonly hidden: boolean;
      readonly isVisible: boolean;
      readonly maximized: boolean;
      readonly parent: $w.Node;
      focusChannel(channelInfo: $w.Chatbox.ChannelInfo): Promise<void>;
      getChannel(channelInfo: $w.Chatbox.ChannelInfo): Promise<$w.Chatbox.Channel>;
      getChannelList(): Promise<$w.Chatbox.Channel[]>;
      maximize(): Promise<void>;
      minimize(): Promise<void>;
      onMaximize(): void;

      /**
       * onMessageReceived
       *  @eventType messageReceived
       */
      onMessageReceived(message: $w.Chatbox.Message): void;

      /**
       * onMessageSent
       *  @eventType messageSent
       */
      onMessageSent(message: $w.Chatbox.Message): void;
      onMinimize(): void;
      onViewportEnter(handler: $w.EventHandler): $w.Element;
      onViewportLeave(handler: $w.EventHandler): $w.Element;
      scrollTo(): Promise<void>;
      sendMessage(messageInfo: $w.Chatbox.MessageInfo): Promise<void>;
  }

  interface Anchor extends $w.Node, $w.ViewportMixin {
    readonly name: string;
  }

  interface Button extends $w.Element, $w.ClickableMixin, $w.StyleMixin, $w.LabelMixin {
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

  interface FormElement extends $w.Element, $w.ValidatableMixin {
  }

  interface DatePicker extends $w.FormElement, $w.FocusMixin, $w.ClickableMixin {
    disabledDates: Date[];
    disabledDaysOfWeek: number[];
    maxDate: Date;
    minDate: Date;
    value: Date;
  }
 }