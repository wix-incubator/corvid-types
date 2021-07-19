/** This d.ts content was partially taken from common/declaration.dts
 * It is not whole and may not be up to date, it is simply here as a testing fixture
 */

 declare namespace $w {
  interface Element extends $w.Node, $w.ViewportMixin {
    readonly rendered: boolean;

    /**
     * Adds an event handler that runs when an element is displayed
     *  in the viewable part of the current window.
     * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
     */
    onMouseIn(handler: $w.Event): $w.Element;

    /**
     * Adds an event handler that runs when an element is displayed
     *  in the viewable part of the current window.
     * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
     */
    onMouseOut(handler: $w.Event): $w.Element;
  }
  
  interface Event {
      readonly target: $w.Element;
      readonly type: string;
  }

  type EventHandler = (event: $w.Event) => void;

  interface ClickableMixin {
      onClick(handler: $w.Event): $w.Element;
      onDblClick(handler: $w.Event): $w.Element;
  }

  interface ViewportMixin {

    /**
     * Adds an event handler that runs when an element is displayed
     *  in the viewable part of the current window.
     * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
     */
     onViewportEnter(handler: $w.EventHandler): $w.Element;

     /**
      * Adds an event handler that runs when an element is no longer
      *  displayed in the viewable part of the current window.
      * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportLeave)
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
      onMessageReceived(message: $w.Chatbox.Message): void;
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