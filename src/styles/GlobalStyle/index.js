import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  /* Vars
    ========================================================================== */

  /* Document
    ========================================================================== */

  /**
  * 1. Correct the line height in all browsers.
  * 2. Prevent adjustments of font size after orientation changes in
  *    IE on Windows Phone and in iOS.
  */

  html {
    line-height: 1.15; /* 1 */
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /* Sections
    ========================================================================== */

  /**
  * Add the correct display in IE 9-.
  */

  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
  }


  /* Grouping content
    ========================================================================== */

  /**
  * Add the correct display in IE 9-.
  * 1. Add the correct display in IE.
  */

  figcaption,
  figure,
  main { /* 1 */
    display: block;
  }

  /**
  * Add the correct margin in IE 8.
  */

  figure {
    margin: 1em 40px;
  }

  /**
  * 1. Add the correct box sizing in Firefox.
  * 2. Show the overflow in Edge and IE.
  */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
  * 1. Correct the inheritance and scaling of font size in all browsers.
  * 2. Correct the odd 'em' font sizing in all browsers.
  */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
    ========================================================================== */

  /**
  * 1. Remove the gray background on active links in IE 10.
  * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
  */

  a {
    background-color: transparent; /* 1 */
    -webkit-text-decoration-skip: objects; /* 2 */
    text-decoration: none;
  }

  /**
  * 1. Remove the bottom border in Chrome 57- and Firefox 39-.
  * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
  */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
  * Prevent the duplicate application of 'bolder' by the next rule in Safari 6.
  */

  b,
  strong {
    font-weight: inherit;
  }

  /**
  * Add the correct font weight in Chrome, Edge, and Safari.
  */

  b,
  strong {
    font-weight: bolder;
  }

  /**
  * 1. Correct the inheritance and scaling of font size in all browsers.
  * 2. Correct the odd 'em' font sizing in all browsers.
  */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
  * Add the correct font style in Android 4.3-.
  */

  dfn {
    font-style: italic;
  }

  /**
  * Add the correct background and color in IE 9-.
  */

  mark {
    background-color: #ff0;
    color: #000;
  }

  /**
  * Add the correct font size in all browsers.
  */

  small {
    font-size: 80%;
  }

  /**
  * Prevent 'sub' and 'sup' elements from affecting the line height in
  * all browsers.
  */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
    ========================================================================== */

  /**
  * Add the correct display in IE 9-.
  */

  audio,
  video {
    display: inline-block;
  }

  /**
  * Add the correct display in iOS 4-7.
  */

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  /**
  * Remove the border on images inside links in IE 10-.
  */

  img {
    border-style: none;
  }

  /**
  * Hide the overflow in IE.
  */

  svg:not(:root) {
    overflow: hidden;
  }

  /* Forms
    ========================================================================== */

  /**
  * Remove the margin in Firefox and Safari.
  */

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    background: transparent;
    font-family: lato, sans-serif;
    background: transparent;
  }

  button > svg { display: block; }

  /**
  * Show the overflow in IE.
  * 1. Show the overflow in Edge.
  */

  button,
  input { /* 1 */
    overflow: visible;
  }

  /**
  * Remove the inheritance of text transform in Edge, Firefox, and IE.
  * 1. Remove the inheritance of text transform in Firefox.
  */

  button,
  select { /* 1 */
    text-transform: none;
  }

  /**
  * 1. Prevent a WebKit bug where (2) destroys native 'audio' and 'video'
  *    controls in Android 4.
  */

  button,
  html [type="button"], /* 1 */
  [type="reset"],
  [type="submit"] {
    outline: none;
    border: 0 none;
    cursor: pointer;
    font-size: inherit;
  }

  /**
  * Remove the inner border and padding in Firefox.
  */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
  * Restore the focus styles unset by the previous rule.
  */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
  * 1. Correct the text wrapping in Edge and IE.
  * 2. Correct the color inheritance from 'fieldset' elements in IE.
  * 3. Remove the padding so developers are not caught out when they zero out
  *    'fieldset' elements in all browsers.
  */

  fieldset {
    border: 0 none;
  }

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
  * 1. Add the correct display in IE 9-.
  * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
  */

  progress {
    display: inline-block; /* 1 */
    vertical-align: baseline; /* 2 */
  }

  /**
  * Remove the default vertical scrollbar in IE.
  */

  textarea {
    overflow: auto;
  }

  /**
  * 1. Add the correct box sizing in IE 10-.
  * 2. Remove the padding in IE 10-.
  */

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
  * Correct the cursor style of increment and decrement buttons in Chrome.
  */

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

  /**
  * 1. Correct the odd appearance in Chrome and Safari.
  * 2. Correct the outline style in Safari.
  */

  [type="search"] {
    /* -webkit-appearance: textfield; 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
  * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
  */

  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACsSURBVHgBfVLBEYJADNzkoT4pgRIoQUugBCrj5fi8ErAEOtASeCofzDLqwXEhM3eTSTa53Z2T6y08AAzjC5emqQdkom1DcTghWFqqXU87lRU6NhxwZ+mZi9U215jQ54YW4MpOTxbybxytIbHBegomZVltWwx9yyswC7LhG4eQghm6sUSwG+oJ9IwQz41ZdGLELDoH/nHOuacemMF8fNtrkV6ghmIC7t7XSIbKD4IDeHwR9ferAAAAAElFTkSuQmCC');
    background-size: contain;
    height: 1em;
    width: 1em;
    border-radius: 50em;
  }


  /**
  * 1. Correct the inability to style clickable types in iOS and Safari.
  * 2. Change font properties to 'inherit' in Safari.
  */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* Interactive
    ========================================================================== */

  /*
  * Add the correct display in IE 9-.
  * 1. Add the correct display in Edge, IE, and Firefox.
  */

  details, /* 1 */
  menu {
    display: block;
  }

  /*
  * Add the correct display in all browsers.
  */

  summary {
    display: list-item;
  }

  /* Scripting
    ========================================================================== */

  /**
  * Add the correct display in IE 9-.
  */

  canvas {
    display: inline-block;
  }

  /**
  * Add the correct display in IE.
  */

  template {
    display: none;
  }

  /* Hidden
    ========================================================================== */

  /**
  * Add the correct display in IE 10-.
  */

  [hidden] {
    display: none;
  }

  * {
    box-sizing: border-box;
  }


  /* Box sizing
    ========================================================================== */

  html {
    box-sizing: border-box;
  }

  * {
  &,
    &:before,
    &:after {
    box-sizing: inherit;
    }
  }

  /* Global
    ========================================================================== */

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: lato, sans-serif;
    margin: 0;
    padding: 0;
    background: white;
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }

  /* Text
    ========================================================================== */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    margin: 0;
  }

  /* Progress bar
    ========================================================================== */

  progress {
    -webkit-appearance: none;
    appearance: none;
    -moz-appearance: none;
    border: none;
    display: block;
  }

`
