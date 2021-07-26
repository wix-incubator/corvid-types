declare namespace $wHandlers {
  declare interface Element extends $w.Node, $w.ViewportMixin {
    /**
     * Adds an event handler that runs when an element is displayed
     *  in the viewable part of the current window.
     * 	[Read more](https://www.wix.com/corvid/reference/$w.ViewportMixin.html#onViewportEnter)
     * @eventtype
     */
    onMouseIn(handler: $w.Event): $w.Element;
  }
}
