'use strict';

var Page        = require("./Page.js");
var ReactDOMRe  = require("reason-react/lib/js/src/reactDOMRe.js");
var ReasonReact = require("reason-react/lib/js/src/reasonReact.js");

ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, Page.make("Hello!", /* array */[])), "index");

/*  Not a pure module */
