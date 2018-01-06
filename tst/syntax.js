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

/* global describe: false */
/* global it: false */
/* global expect: false */
/* global require: false */
/* jshint -W030: false */

var Syntax = require("../lib/syntax.node.js")

describe("Syntax Library", function () {
    it("should expose its official API", function () {
        var syntax = new Syntax()
        expect(syntax).to.be.a("object")
        expect(syntax).to.respondTo("config")
        expect(syntax).to.respondTo("richtext")
        expect(syntax).to.respondTo("plaintext")
        expect(syntax).to.respondTo("markup")
        expect(syntax).to.respondTo("html")
    })
    it("some syntax highlighting functionality", function () {
        var syntax = new Syntax({ language: "javascript" })
        var text =
            "/* comment */\n" +
            "// comment\n" +
            "var foo = ={function foo}==(1)= (bar, quux) {\n" +
            "    return (/regexp/ + true + \"function \\\"foo\\\" bar\" + bar < 42.0)\n" +
            "}\n"
        syntax.richtext(text)
        var html = syntax.html()
        expect(html).to.be.equal(
            "<span class=\"syntax-comment\">/* comment */</span>\n" +
            "<span class=\"syntax-comment\">// comment</span>\n" +
            "<span class=\"syntax-keyword\">var</span> foo = <span class=\"syntax-keyword\">" +
            "<span class=\"syntax-marker\">function</span></span><span class=\"syntax-marker\"> foo" +
            "<span class=\"syntax-anchor syntax-anchor-1\"></span></span> (bar, quux) {\n" +
            "    <span class=\"syntax-keyword\">return</span> (<span class=\"syntax-literal\">/regexp/</span> + " +
            "<span class=\"syntax-literal\">true</span> + <span class=\"syntax-literal\">\"function \\\"foo\\\" bar\"</span> + " +
            "bar &lt; <span class=\"syntax-literal\">42.0</span>)\n" +
            "}\n"
        )
    })
})

