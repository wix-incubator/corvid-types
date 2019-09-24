/// <reference path="./utilityTypes.d.ts" />

declare type TypeNameToSdkType = {
    AccountNavBar: $w.AccountNavBar;
    Anchor: $w.Anchor;
    Box: $w.Box;
    Button: $w.Button;
    Checkbox: $w.Checkbox;
    CheckboxGroup: $w.CheckboxGroup;
    Column: $w.Column;
    ColumnStrip: $w.ColumnStrip;
    Container: $w.Container;
    DatePicker: $w.DatePicker;
    Document: $w.Document;
    Dropdown: $w.Dropdown;
    Footer: $w.Footer;
    Gallery: $w.Gallery;
    GoogleMap: $w.GoogleMap;
    Header: $w.Header;
    HtmlComponent: $w.HtmlComponent;
    IFrame: $w.IFrame;
    Image: $w.Image;
    MediaBox: $w.MediaBox;
    MenuContainer: $w.MenuContainer;
    Page: $w.Page;
    QuickActionBar: $w.QuickActionBar;
    RadioButtonGroup: $w.RadioButtonGroup;
    Repeater: $w.Repeater;
    Slide: $w.Slide;
    Slideshow: $w.Slideshow;
    Table: $w.Table;
    Text: $w.Text;
    TextBox: $w.TextBox;
    TextInput: $w.TextInput;
    UploadButton: $w.UploadButton;
    VectorImage: $w.VectorImage;
    VerticalMenu: $w.VerticalMenu;
    Video: $w.Video;
    AudioPlayer: $w.AudioPlayer;
    Captcha: $w.Captcha;
    Pagination: $w.Pagination;
    ProgressBar: $w.ProgressBar;
    RatingsDisplay: $w.RatingsDisplay;
    RatingsInput: $w.RatingsInput;
    RichTextBox: $w.RichTextBox;
    Slider: $w.Slider;
    Switch: $w.Switch;
    TimePicker: $w.TimePicker;
    VideoPlayer: $w.VideoPlayer;
};

declare type WixElementSelector = PageElementsMap & IntersectionArrayAndBase<TypeNameToSdkType, 'Document'>;

/**
 * Selects and returns elements from a page.
 */
declare function $w<T extends keyof WixElementSelector>(selector: T): WixElementSelector[T];

/**
 * The `$w` namespace contains everything you need in order to work
 *  with your site's components. It contains all of the UI elements, nodes, and
 *  events that make up your site. It also includes the [`$w()`]($w.html#w),
 *  [`onReady()`]($w.html#onReady), and [`at()`]($w.html#at) functions.
 * 
 *  The APIs in `$w` can only be used in front-end code.
 * 
 *  You do not need to import `$w`.
 */
declare namespace $w {
    /**
     * Gets a selector function for a specific context.
     */
    function at(context: $w.Event.EventContext): $w.$w;

    /**
     * Sets the function that runs when all the page elements have finished loading.
     */
    function onReady(initFunction: $w.ReadyHandler): void;

    /**
     * Selects and returns elements from a page.
     */
    type $w = <T extends keyof WixElementSelector>(selector: T)=>WixElementSelector[T];

}

