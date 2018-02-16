/*
**  Syntax -- Unobtrusive Syntax Highlighting
**  Copyright (c) 2015-2018 Ralf S. Engelschall <rse@engelschall.com>
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
import Tokenizr   from "tokenizr"
import Highlight  from "highlight.js/lib/highlight"
import SAX        from "sax"

/*  load language support (Web)  */
Highlight.registerLanguage("xml",        require("highlight.js/lib/languages/xml"))
Highlight.registerLanguage("css",        require("highlight.js/lib/languages/css"))
Highlight.registerLanguage("less",       require("highlight.js/lib/languages/less"))
Highlight.registerLanguage("http",       require("highlight.js/lib/languages/http"))

/*  load language support (Configuration)  */
Highlight.registerLanguage("json",       require("highlight.js/lib/languages/json"))
Highlight.registerLanguage("yaml",       require("highlight.js/lib/languages/yaml"))
Highlight.registerLanguage("ini",        require("highlight.js/lib/languages/ini"))

/*  load language support (Programming Languages)  */
Highlight.registerLanguage("cpp",        require("highlight.js/lib/languages/cpp"))
Highlight.registerLanguage("objectivec", require("highlight.js/lib/languages/objectivec"))
Highlight.registerLanguage("swift",      require("highlight.js/lib/languages/swift"))
Highlight.registerLanguage("cs",         require("highlight.js/lib/languages/cs"))
Highlight.registerLanguage("fsharp",     require("highlight.js/lib/languages/fsharp"))
Highlight.registerLanguage("go",         require("highlight.js/lib/languages/go"))
Highlight.registerLanguage("java",       require("highlight.js/lib/languages/java"))
Highlight.registerLanguage("kotlin",     require("highlight.js/lib/languages/kotlin"))
Highlight.registerLanguage("groovy",     require("highlight.js/lib/languages/groovy"))
Highlight.registerLanguage("scala",      require("highlight.js/lib/languages/scala"))
Highlight.registerLanguage("javascript", require("highlight.js/lib/languages/javascript"))
Highlight.registerLanguage("typescript", require("highlight.js/lib/languages/typescript"))
Highlight.registerLanguage("php",        require("highlight.js/lib/languages/php"))
Highlight.registerLanguage("perl",       require("highlight.js/lib/languages/perl"))
Highlight.registerLanguage("python",     require("highlight.js/lib/languages/python"))
Highlight.registerLanguage("ruby",       require("highlight.js/lib/languages/ruby"))

/*  load language support (Shell)  */
Highlight.registerLanguage("shell",      require("highlight.js/lib/languages/shell"))
Highlight.registerLanguage("bash",       require("highlight.js/lib/languages/bash"))
Highlight.registerLanguage("powershell", require("highlight.js/lib/languages/powershell"))
Highlight.registerLanguage("makefile",   require("highlight.js/lib/languages/makefile"))

/*  load language support (Other)  */
Highlight.registerLanguage("sql",        require("highlight.js/lib/languages/sql"))
Highlight.registerLanguage("markdown",   require("highlight.js/lib/languages/markdown"))
Highlight.registerLanguage("diff",       require("highlight.js/lib/languages/diff"))

/*  internal API symbols  */
const CONFIG      = Symbol("CONFIG")
const RICHTEXT    = Symbol("RICHTEXT")
const PLAINTEXT   = Symbol("PLAINTEXT")
const MARKUP      = Symbol("MARKUP")
const SEQUENCE    = Symbol("SEQUENCE")

/*  exported API class  */
class Syntax {
    /*  return the library version  */
    static version () {
        /* global $major: false */
        /* global $minor: false */
        /* global $micro: false */
        /* global $date:  false */
        return {
            major: $major,
            minor: $minor,
            micro: $micro,
            date:  $date
        }
    }

    /*  construct the PAI class  */
    constructor (config = {}) {
        /*  predefine valid options  */
        this[CONFIG] = {
            language:         "auto",
            cssPrefix:        "syntax-",
            xmlPrefix:        "syntax-",
            tabReplace:       "    ",
            newlineReplace:   "\n",
            regexAnchorOpen:  "=\\(",
            regexAnchorClose: "\\)=",
            regexMarkerOpen:  "=\\{",
            regexMarkerClose: "\\}="
        }

        /*  initialize us  */
        this.config(config)
        this._reset()
    }

    /*  INTERNAL: reset the internals  */
    _reset () {
        this[RICHTEXT]  = ""
        this[PLAINTEXT] = ""
        this[MARKUP] = {
            anchor:  {},
            marker:  [],
            comment: [],
            keyword: [],
            literal: []
        }
        this[SEQUENCE] = []
    }

    /*  set configuration options  */
    config (config = {}) {
        /*  sanity check usage  */
        if (arguments.length !== 1)
            throw new Error("invalid number of arguments (1 expected)")
        if (typeof config !== "object")
            throw new Error("invalid configuration argument (object expected)")

        /*  remember old language  */
        let languageOld = this[CONFIG].language

        /*  iterate over all configuration options  */
        Object.keys(config).forEach((option) => {
            /*  sanity check their validity  */
            if (this[CONFIG][option] === undefined)
                throw new Error(`invalid configuration option "${option}"`)

            /*  override default value  */
            this[CONFIG][option] = config[option]
        })

        /*  try to auto-load new language  */
        let language = this[CONFIG].language
        if (   language !== languageOld
            && language.match(/^(?:auto|none)$/) === null) {
            let found = Highlight.getLanguage(language)
            if (!found) {
                /* global global: true */
                if (typeof global.window === "object")
                    throw new Error("cannot auto-load new languages in browser environment")
                let obj
                try {
                    obj = require("highlight.js/lib/languages/" + language)
                } catch (ex) {
                }
                if (!obj)
                    throw new Error(`failed to load language "${language}"`)
                Highlight.registerLanguage(language, obj)
            }
        }

        return this
    }

    /*  set rich text  */
    richtext (text) {
        /*  sanity check usage  */
        if (arguments.length !== 1)
            throw new Error("invalid number of arguments (1 expected)")
        if (typeof text !== "string")
            throw new Error("invalid rich text argument (string expected)")

        /*  reset internals  */
        this._reset()

        /*  parse rich text  */
        this[RICHTEXT] = text
        this._extract()
        this._highlight()
        return this
    }

    /*  INTERNAL: split rich text into plain text plus anchors/markers  */
    _extract () {
        /*  extract explicit language-unspecific anchor/marker
            (beforehand to make text valid language syntax again)  */
        let lexer = new Tokenizr()
        let regexAnchor =
            new RegExp(`${this[CONFIG].regexAnchorOpen}(\\d+)${this[CONFIG].regexAnchorClose}`)
        let regexMarker =
            new RegExp(`${this[CONFIG].regexMarkerOpen}(.+?)${this[CONFIG].regexMarkerClose}`)
        let regexTextNonGreedy =
            new RegExp(`(?:.|\\r?\\n)+?(?=${this[CONFIG].regexAnchorOpen}|${this[CONFIG].regexMarkerOpen})`)
        let regexTextGreedy =
            new RegExp(`(?:.|\\r?\\n)+`)
        lexer.rule(regexAnchor,        (ctx, m) => { ctx.accept("anchor", m[1]) })
        lexer.rule(regexMarker,        (ctx, m) => { ctx.accept("marker", m[1]) })
        lexer.rule(regexTextNonGreedy, (ctx, m) => { ctx.accept("text",   m[0]) })
        lexer.rule(regexTextGreedy,    (ctx, m) => { ctx.accept("text",   m[0]) })
        lexer.input(this[RICHTEXT])
        this[PLAINTEXT] = ""
        let pos = 0
        lexer.tokens().forEach((token) => {
            if (token.isA("anchor"))
                this[MARKUP].anchor[token.value] = pos
            else if (token.isA("marker")) {
                this[MARKUP].marker.push([ pos, pos + token.value.length ])
                this[PLAINTEXT] += token.value
                pos += token.value.length
            }
            else if (token.isA("text")) {
                this[PLAINTEXT] += token.value
                pos += token.value.length
            }
        })
    }

    /*  INTERNAL: find language-specific syntactical elements of text  */
    _highlight () {
        /*  pass 1: apply the highlighting engine onto plain text and get XML/HTML  */
        if (this[CONFIG].language === "none")
            return
        let result
        Highlight.configure({ tabReplace: this[CONFIG].tabReplace, classPrefix: "highlight-redux-" })
        if (this[CONFIG].language === "auto")
            result = Highlight.highlightAuto(this[PLAINTEXT])
        else if (this[CONFIG].language instanceof Array)
            result = Highlight.highlightAuto(this[PLAINTEXT], this[CONFIG].language)
        else
            result = Highlight.highlight(this[CONFIG].language, this[PLAINTEXT], true)

        /*  pass 2: parse XML/HTML to determine highlighting positions  */
        let pos = 0
        let stack = []
        let parser = SAX.parser(true, {})
        parser.onerror = (err) => {
            throw new Error(`internal XML/HTML parsing error: ${err}?!`)
        }
        parser.onopentag = (node) => {
            let type = node.attributes.class
            if (   typeof type === "string"
                && type.match(/^highlight-redux-(?:regexp|string|number)$/) !== null)
                type = "highlight-redux-literal"
            if (   typeof type === "string"
                && type.match(/^highlight-redux-(?:keyword|literal|comment)$/) !== null) {
                type = type.replace(/^highlight-redux-/, "")
                stack.push({ type: type, tag: node.name, pos: pos, take: true })
            }
            else
                stack.push({ take: false, tag: node.name })
        }
        parser.ontext = (text) => {
            pos += text.length
        }
        parser.onclosetag = (name) => {
            let info = stack.pop()
            if (info.tag !== name)
                throw new Error(`internal XML/HTML parsing error: ` +
                    `open tag <${info.tag}> does not match close tag </${name}>?!`)
            if (info.take)
                this[MARKUP][info.type].push([ info.pos, pos ])
        }
        parser.write(`<root>${result.value}</root>`).close()
        return this
    }

    /*  retrieve plain text  */
    plaintext (plaintext) {
        if (arguments.length > 1)
            throw new Error("invalid number of arguments (0 or 1 expected)")
        if (arguments.length === 1) {
            if (typeof plaintext !== "string")
                throw new Error("invalid plain text argument (string expected)")
            this[PLAINTEXT] = plaintext
            return this
        }
        else
            return this[PLAINTEXT]
    }

    /*  set/get markup information  */
    markup (markup) {
        if (arguments.length > 1)
            throw new Error("invalid number of arguments (0 or 1 expected)")
        if (arguments.length === 1) {
            if (typeof markup !== "object")
                throw new Error("invalid markup argument (object expected)")
            this[MARKUP] = markup
            return this
        }
        else
            return this[MARKUP]
    }

    /*  INTERNAL: merge and sequence the markup information  */
    _sequence () {
        /*  insert all highlighting results
            (potentially strictly nested, but never overlapping)  */
        let list = []
        const insert = (type) => {
            let items = this[MARKUP][type]
            items.forEach((item) => {
                list.push([ item[0], "S", type ])
                list.push([ item[1], "E", type ])
            })
        }
        insert("comment")
        insert("keyword")
        insert("literal")

        /*  make list sorted according to position  */
        list = list.sort((a, b) => a[0] - b[0])

        /*  iterate over all markers...  */
        this[MARKUP].marker.forEach((marker) => {
            let [ S, E ] = marker

            /*  find position for marker start  */
            let i
            for (i = 0; i < list.length; i++)
                if (list[i][0] >= S)
                    break

            /*  skip start tags at marker start position
                (to avoid inserting zero-length markers)  */
            for (; i < list.length; i++)
                if (!(list[i][0] === S && list[i][1] === "S"))
                    break

            /*  insert marker start  */
            list.splice(i, 0, [ S, "S", "marker" ])
            i += 1

            /*  skip over all intermediate items  */
            for (; i < list.length; i++) {
                if (list[i][0] >= E)
                    break
                /*  stop marker before, start again after  */
                list.splice(i,     0, [ list[i][0], "E", "marker" ])
                list.splice(i + 2, 0, [ list[i][0], "S", "marker" ])
                i += 2
            }

            /*  insert marker end  */
            list.splice(i, 0, [ E, "E", "marker" ])
        })

        /*  iterate over all anchors...  */
        Object.keys(this[MARKUP].anchor).forEach((anchor) => {
            let pos = this[MARKUP].anchor[anchor]

            /*  find position for anchor start  */
            let i
            for (i = 0; i < list.length; i++)
                if (list[i][0] >= pos)
                    break

            /*  insert anchor  */
            list.splice(i, 0, [ pos, "X", "anchor", anchor ])
        })

        /*  iterate over all markers  */
        this[SEQUENCE] = list
    }

    /*  convert into HTML  */
    html () {
        /*  sanity check usage  */
        if (arguments.length !== 0)
            throw new Error("invalid number of arguments (0 expected)")

        /*  merge and sequence the markup information  */
        this._sequence()

        /*  helper function for escaping characters with special meaning in HTML  */
        const renderText = (text) =>
            text.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/\r?\n/g, this[CONFIG].newlineReplace)

        /*  spice HTML markup into the plain text  */
        let text = this[PLAINTEXT]
        let markup = ""
        let posLast = 0
        this[SEQUENCE].forEach((item) => {
            let [ pos, kind, type, val ] = item
            let tag
            if (type === "anchor")
                tag = `<span class="${this[CONFIG].cssPrefix}${type} ` +
                    `${this[CONFIG].cssPrefix}${type}-${val}"></span>`
            else if (kind === "S")
                tag = `<span class="${this[CONFIG].cssPrefix}${type}">`
            else
                tag = "</span>"
            markup += renderText(text.substring(posLast, pos)) + tag
            posLast = pos
        })
        markup += renderText(text.substring(posLast))

        return markup
    }

    /*  convert into XML  */
    xml () {
        /*  sanity check usage  */
        if (arguments.length !== 0)
            throw new Error("invalid number of arguments (0 expected)")

        /*  merge and sequence the markup information  */
        this._sequence()

        /*  helper function for escaping characters with special meaning in HTML  */
        const renderText = (text) =>
            text.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/\r?\n/g, this[CONFIG].newlineReplace)

        /*  spice XML markup into the plain text  */
        let text = this[PLAINTEXT]
        let markup = ""
        let posLast = 0
        this[SEQUENCE].forEach((item) => {
            let [ pos, kind, type, val ] = item
            let tag
            if (type === "anchor")
                tag = `<${this[CONFIG].xmlPrefix}${type}>${val}</${this[CONFIG].xmlPrefix}${type}>`
            else if (kind === "S")
                tag = `<${this[CONFIG].xmlPrefix}${type}>`
            else
                tag = `</${this[CONFIG].xmlPrefix}${type}>`
            markup += renderText(text.substring(posLast, pos)) + tag
            posLast = pos
        })
        markup += renderText(text.substring(posLast))

        return markup
    }
}

/*  export the traditional way for interoperability reasons
    (as Babel would export an object with a 'default' field)  */
module.exports = Syntax

