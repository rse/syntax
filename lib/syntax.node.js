/*
**  Syntax -- Unobtrusive Syntax Highlighting
**  Copyright (c) 2015 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Syntax = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],2:[function(_dereq_,module,exports){
(function (process){
/*
**  Syntax -- Unobtrusive Syntax Highlighting
**  Copyright (c) 2015 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*  external requirements  */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _tokenizr = _dereq_("tokenizr");

var _tokenizr2 = _interopRequireDefault(_tokenizr);

var _highlightJsLibHighlight = _dereq_("highlight.js/lib/highlight");

var _highlightJsLibHighlight2 = _interopRequireDefault(_highlightJsLibHighlight);

var _sax = _dereq_("sax");

var _sax2 = _interopRequireDefault(_sax);

/*  load language support (Web)  */
_highlightJsLibHighlight2["default"].registerLanguage("xml", _dereq_("highlight.js/lib/languages/xml"));
_highlightJsLibHighlight2["default"].registerLanguage("css", _dereq_("highlight.js/lib/languages/css"));
_highlightJsLibHighlight2["default"].registerLanguage("less", _dereq_("highlight.js/lib/languages/less"));
_highlightJsLibHighlight2["default"].registerLanguage("http", _dereq_("highlight.js/lib/languages/http"));
_highlightJsLibHighlight2["default"].registerLanguage("json", _dereq_("highlight.js/lib/languages/json"));
_highlightJsLibHighlight2["default"].registerLanguage("ini", _dereq_("highlight.js/lib/languages/ini"));
_highlightJsLibHighlight2["default"].registerLanguage("markdown", _dereq_("highlight.js/lib/languages/markdown"));
_highlightJsLibHighlight2["default"].registerLanguage("sql", _dereq_("highlight.js/lib/languages/sql"));

/*  load language support (Major Languages)  */
_highlightJsLibHighlight2["default"].registerLanguage("cpp", _dereq_("highlight.js/lib/languages/cpp"));
_highlightJsLibHighlight2["default"].registerLanguage("objectivec", _dereq_("highlight.js/lib/languages/objectivec"));
_highlightJsLibHighlight2["default"].registerLanguage("swift", _dereq_("highlight.js/lib/languages/swift"));
_highlightJsLibHighlight2["default"].registerLanguage("cs", _dereq_("highlight.js/lib/languages/cs"));
_highlightJsLibHighlight2["default"].registerLanguage("fsharp", _dereq_("highlight.js/lib/languages/fsharp"));
_highlightJsLibHighlight2["default"].registerLanguage("go", _dereq_("highlight.js/lib/languages/go"));
_highlightJsLibHighlight2["default"].registerLanguage("java", _dereq_("highlight.js/lib/languages/java"));
_highlightJsLibHighlight2["default"].registerLanguage("groovy", _dereq_("highlight.js/lib/languages/groovy"));
_highlightJsLibHighlight2["default"].registerLanguage("scala", _dereq_("highlight.js/lib/languages/scala"));
_highlightJsLibHighlight2["default"].registerLanguage("javascript", _dereq_("highlight.js/lib/languages/javascript"));
_highlightJsLibHighlight2["default"].registerLanguage("typescript", _dereq_("highlight.js/lib/languages/typescript"));
_highlightJsLibHighlight2["default"].registerLanguage("php", _dereq_("highlight.js/lib/languages/php"));
_highlightJsLibHighlight2["default"].registerLanguage("perl", _dereq_("highlight.js/lib/languages/perl"));
_highlightJsLibHighlight2["default"].registerLanguage("python", _dereq_("highlight.js/lib/languages/python"));
_highlightJsLibHighlight2["default"].registerLanguage("ruby", _dereq_("highlight.js/lib/languages/ruby"));

/*  load language support (Shell)  */
_highlightJsLibHighlight2["default"].registerLanguage("bash", _dereq_("highlight.js/lib/languages/bash"));
_highlightJsLibHighlight2["default"].registerLanguage("powershell", _dereq_("highlight.js/lib/languages/powershell"));

/*  internal API symbols  */
var CONFIG = Symbol("CONFIG");
var RICHTEXT = Symbol("RICHTEXT");
var PLAINTEXT = Symbol("PLAINTEXT");
var MARKUP = Symbol("MARKUP");
var SEQUENCE = Symbol("SEQUENCE");

/*  exported API class  */

var Syntax = (function () {
    _createClass(Syntax, null, [{
        key: "version",

        /*  return the library version  */
        value: function version() {
            /* global 1: false */
            /* global 0: false */
            /* global 1: false */
            /* global 20150823:  false */
            return {
                major: 1,
                minor: 0,
                micro: 1,
                date: 20150823
            };
        }

        /*  construct the PAI class  */
    }]);

    function Syntax() {
        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Syntax);

        /*  predefine valid options  */
        this[CONFIG] = {
            language: "auto",
            cssPrefix: "syntax-",
            tabReplace: "    ",
            newlineReplace: "\n",
            regexAnchorOpen: "=\\(",
            regexAnchorClose: "\\)=",
            regexMarkerOpen: "=\\{",
            regexMarkerClose: "\\}="
        };

        /*  initialize us  */
        this.config(config);
        this._reset();
    }

    /*  INTERNAL: reset the internals  */

    _createClass(Syntax, [{
        key: "_reset",
        value: function _reset() {
            this[RICHTEXT] = "";
            this[PLAINTEXT] = "";
            this[MARKUP] = {
                anchor: {},
                marker: [],
                comment: [],
                keyword: [],
                literal: []
            };
            this[SEQUENCE] = [];
        }

        /*  set configuration options  */
    }, {
        key: "config",
        value: function config() {
            var _this = this;

            var _config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            /*  sanity check usage  */
            if (arguments.length !== 1) throw new Error("invalid number of arguments (1 expected)");
            if (typeof _config !== "object") throw new Error("invalid configuration argument (object expected)");

            /*  remember old language  */
            var languageOld = this[CONFIG].language;

            /*  iterate over all configuration options  */
            Object.keys(_config).forEach(function (option) {
                /*  sanity check their validity  */
                if (_this[CONFIG][option] === undefined) throw new Error("invalid configuration option \"" + option + "\"");

                /*  override default value  */
                _this[CONFIG][option] = _config[option];
            });

            /*  try to auto-load new language  */
            var language = this[CONFIG].language;
            if (language !== languageOld && language.match(/^(?:auto|none)$/) === null) {
                var found = _highlightJsLibHighlight2["default"].getLanguage(language);
                if (!found) {
                    /* global process: true */
                    if (process.browser) throw new Error("cannot auto-load new languages in browser environment");
                    var obj = undefined;
                    try {
                        obj = _dereq_("highlight.js/lib/languages/" + language);
                    } catch (ex) {}
                    if (!obj) throw new Error("failed to load language \"" + language + "\"");
                    _highlightJsLibHighlight2["default"].registerLanguage(language, obj);
                }
            }

            return this;
        }

        /*  set rich text  */
    }, {
        key: "richtext",
        value: function richtext(text) {
            /*  sanity check usage  */
            if (arguments.length !== 1) throw new Error("invalid number of arguments (1 expected)");
            if (typeof text !== "string") throw new Error("invalid rich text argument (string expected)");

            /*  reset internals  */
            this._reset();

            /*  parse rich text  */
            this[RICHTEXT] = text;
            this._extract();
            this._highlight();
            return this;
        }

        /*  INTERNAL: split rich text into plain text plus anchors/markers  */
    }, {
        key: "_extract",
        value: function _extract() {
            var _this2 = this;

            /*  extract explicit language-unspecific anchor/marker
                (beforehand to make text valid language syntax again)  */
            var lexer = new _tokenizr2["default"]();
            var regexAnchor = new RegExp(this[CONFIG].regexAnchorOpen + "(\\d+)" + this[CONFIG].regexAnchorClose);
            var regexMarker = new RegExp(this[CONFIG].regexMarkerOpen + "(.+?)" + this[CONFIG].regexMarkerClose);
            var regexTextNonGreedy = new RegExp("(?:.|\\r?\\n)+?(?=" + this[CONFIG].regexAnchorOpen + "|" + this[CONFIG].regexMarkerOpen + ")");
            var regexTextGreedy = new RegExp("(?:.|\\r?\\n)+");
            lexer.rule(regexAnchor, function (ctx, m) {
                ctx.accept("anchor", m[1]);
            });
            lexer.rule(regexMarker, function (ctx, m) {
                ctx.accept("marker", m[1]);
            });
            lexer.rule(regexTextNonGreedy, function (ctx, m) {
                ctx.accept("text", m[0]);
            });
            lexer.rule(regexTextGreedy, function (ctx, m) {
                ctx.accept("text", m[0]);
            });
            lexer.input(this[RICHTEXT]);
            this[PLAINTEXT] = "";
            var pos = 0;
            lexer.tokens().forEach(function (token) {
                if (token.type === "anchor") _this2[MARKUP].anchor[token.value] = pos;else if (token.type === "marker") {
                    _this2[MARKUP].marker.push([pos, pos + token.value.length]);
                    _this2[PLAINTEXT] += token.value;
                    pos += token.value.length;
                } else {
                    _this2[PLAINTEXT] += token.value;
                    pos += token.value.length;
                }
            });
        }

        /*  INTERNAL: find language-specific syntactical elements of text  */
    }, {
        key: "_highlight",
        value: function _highlight() {
            var _this3 = this;

            /*  pass 1: apply the highlighting engine onto plain text and get XML/HTML  */
            if (this[CONFIG].language === "none") return;
            var result = undefined;
            _highlightJsLibHighlight2["default"].configure({ tabReplace: this[CONFIG].tabReplace, classPrefix: "highlight-redux-" });
            if (this[CONFIG].language === "auto") result = _highlightJsLibHighlight2["default"].highlightAuto(this[PLAINTEXT]);else if (this[CONFIG].language instanceof Array) result = _highlightJsLibHighlight2["default"].highlightAuto(this[PLAINTEXT], this[CONFIG].language);else result = _highlightJsLibHighlight2["default"].highlight(this[CONFIG].language, this[PLAINTEXT], true);

            /*  pass 2: parse XML/HTML to determine highlighting positions  */
            var pos = 0;
            var stack = [];
            var parser = _sax2["default"].parser(true, {});
            parser.onerror = function (err) {
                throw new Error("internal XML/HTML parsing error: " + err + "?!");
            };
            parser.onopentag = function (node) {
                var type = node.attributes["class"];
                if (typeof type === "string" && type.match(/^highlight-redux-(?:regexp|string|number)$/) !== null) type = "highlight-redux-literal";
                if (typeof type === "string" && type.match(/^highlight-redux-(?:keyword|literal|comment)$/) !== null) {
                    type = type.replace(/^highlight-redux-/, "");
                    stack.push({ type: type, tag: node.name, pos: pos, take: true });
                } else stack.push({ take: false, tag: node.name });
            };
            parser.ontext = function (text) {
                pos += text.length;
            };
            parser.onclosetag = function (name) {
                var info = stack.pop();
                if (info.tag !== name) throw new Error("internal XML/HTML parsing error: " + ("open tag <" + info.tag + "> does not match close tag </" + name + ">?!"));
                if (info.take) _this3[MARKUP][info.type].push([info.pos, pos]);
            };
            parser.write("<root>" + result.value + "</root>").close();
            return this;
        }

        /*  retrieve plain text  */
    }, {
        key: "plaintext",
        value: function plaintext(_plaintext) {
            if (arguments.length > 1) throw new Error("invalid number of arguments (0 or 1 expected)");
            if (arguments.length === 1) {
                if (typeof _plaintext !== "string") throw new Error("invalid plain text argument (string expected)");
                this[PLAINTEXT] = _plaintext;
                return this;
            } else return this[PLAINTEXT];
        }

        /*  set/get markup information  */
    }, {
        key: "markup",
        value: function markup(_markup) {
            if (arguments.length > 1) throw new Error("invalid number of arguments (0 or 1 expected)");
            if (arguments.length === 1) {
                if (typeof _markup !== "object") throw new Error("invalid markup argument (object expected)");
                this[MARKUP] = _markup;
                return this;
            } else return this[MARKUP];
        }

        /*  INTERNAL: merge and sequence the markup information  */
    }, {
        key: "_sequence",
        value: function _sequence() {
            var _this4 = this;

            /*  insert all highlighting results
                (potentially strictly nested, but never overlapping)  */
            var list = [];
            var insert = function insert(type) {
                var items = _this4[MARKUP][type];
                items.forEach(function (item) {
                    list.push([item[0], "S", type]);
                    list.push([item[1], "E", type]);
                });
            };
            insert("comment");
            insert("keyword");
            insert("literal");

            /*  make list sorted according to position  */
            list = list.sort(function (a, b) {
                return a[0] - b[0];
            });

            /*  iterate over all markers...  */
            this[MARKUP].marker.forEach(function (marker) {
                var _marker = _slicedToArray(marker, 2);

                var S = _marker[0];
                var E = _marker[1];

                /*  find position for marker start  */
                var i = undefined;
                for (i = 0; i < list.length; i++) if (list[i][0] >= S) break;

                /*  skip start tags at marker start position
                    (to avoid inserting zero-length markers)  */
                for (; i < list.length; i++) if (!(list[i][0] === S && list[i][1] === "S")) break;

                /*  insert marker start  */
                list.splice(i, 0, [S, "S", "marker"]);
                i += 1;

                /*  skip over all intermediate items  */
                for (; i < list.length; i++) {
                    if (list[i][0] >= E) break;
                    /*  stop marker before, start again after  */
                    list.splice(i, 0, [list[i][0], "E", "marker"]);
                    list.splice(i + 2, 0, [list[i][0], "S", "marker"]);
                    i += 2;
                }

                /*  insert marker end  */
                list.splice(i, 0, [E, "E", "marker"]);
            });

            /*  iterate over all anchors...  */
            Object.keys(this[MARKUP].anchor).forEach(function (anchor) {
                var pos = _this4[MARKUP].anchor[anchor];

                /*  find position for anchor start  */
                var i = undefined;
                for (i = 0; i < list.length; i++) if (list[i][0] >= pos) break;

                /*  insert anchor  */
                list.splice(i, 0, [pos, "X", "anchor", anchor]);
            });

            /*  iterate over all markers  */
            this[SEQUENCE] = list;
        }

        /*  convert into HTML  */
    }, {
        key: "html",
        value: function html() {
            var _this5 = this;

            /*  sanity check usage  */
            if (arguments.length !== 0) throw new Error("invalid number of arguments (0 expected)");

            /*  merge and sequence the markup information  */
            this._sequence();

            /*  helper function for escaping characters with special meaning in HTML  */
            var renderText = function renderText(text) {
                return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r?\n/g, _this5[CONFIG].newlineReplace);
            };

            /*  spice HTML markup into the plain text  */
            var text = this[PLAINTEXT];
            var html = "";
            var posLast = 0;
            this[SEQUENCE].forEach(function (item) {
                var _item = _slicedToArray(item, 4);

                var pos = _item[0];
                var kind = _item[1];
                var type = _item[2];
                var val = _item[3];

                var tag = undefined;
                if (type === "anchor") tag = "<span class=\"" + _this5[CONFIG].cssPrefix + type + " " + ("" + _this5[CONFIG].cssPrefix + type + "-" + val + "\"></span>");else if (kind === "S") tag = "<span class=\"" + _this5[CONFIG].cssPrefix + type + "\">";else tag = "</span>";
                html += renderText(text.substring(posLast, pos)) + tag;
                posLast = pos;
            });
            html += renderText(text.substring(posLast));

            return html;
        }
    }]);

    return Syntax;
})();

exports["default"] = Syntax;
module.exports = exports["default"];

}).call(this,_dereq_('_process'))
},{"_process":1,"highlight.js/lib/highlight":"highlight.js/lib/highlight","highlight.js/lib/languages/bash":"highlight.js/lib/languages/bash","highlight.js/lib/languages/cpp":"highlight.js/lib/languages/cpp","highlight.js/lib/languages/cs":"highlight.js/lib/languages/cs","highlight.js/lib/languages/css":"highlight.js/lib/languages/css","highlight.js/lib/languages/fsharp":"highlight.js/lib/languages/fsharp","highlight.js/lib/languages/go":"highlight.js/lib/languages/go","highlight.js/lib/languages/groovy":"highlight.js/lib/languages/groovy","highlight.js/lib/languages/http":"highlight.js/lib/languages/http","highlight.js/lib/languages/ini":"highlight.js/lib/languages/ini","highlight.js/lib/languages/java":"highlight.js/lib/languages/java","highlight.js/lib/languages/javascript":"highlight.js/lib/languages/javascript","highlight.js/lib/languages/json":"highlight.js/lib/languages/json","highlight.js/lib/languages/less":"highlight.js/lib/languages/less","highlight.js/lib/languages/markdown":"highlight.js/lib/languages/markdown","highlight.js/lib/languages/objectivec":"highlight.js/lib/languages/objectivec","highlight.js/lib/languages/perl":"highlight.js/lib/languages/perl","highlight.js/lib/languages/php":"highlight.js/lib/languages/php","highlight.js/lib/languages/powershell":"highlight.js/lib/languages/powershell","highlight.js/lib/languages/python":"highlight.js/lib/languages/python","highlight.js/lib/languages/ruby":"highlight.js/lib/languages/ruby","highlight.js/lib/languages/scala":"highlight.js/lib/languages/scala","highlight.js/lib/languages/sql":"highlight.js/lib/languages/sql","highlight.js/lib/languages/swift":"highlight.js/lib/languages/swift","highlight.js/lib/languages/typescript":"highlight.js/lib/languages/typescript","highlight.js/lib/languages/xml":"highlight.js/lib/languages/xml","sax":"sax","tokenizr":"tokenizr"}]},{},[2])(2)
});