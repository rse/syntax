
Syntax
======

Unobtrusive Syntax Highlighting Library

<p/>
<img src="https://nodei.co/npm/syntax.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/syntax.png" alt=""/>

About
-----

Syntax is JavaScript library (for use in Node.js and Browser
environments) to apply Syntax Highlighting to a piece of input text. It
is based on four major design aspects:

- **Good Language Support**:
  The language-specific determination of comments, keywords and
  literals should be a reasonable one. As syntax highlighting
  is a science of its own, Syntax is based on the excellent
  [Highlight.js](https://highlightjs.org/) library.

- **Unobtrusive Syntax Highlighting**:
  The author, Ralf S. Engelschall, is a die-hard coder with a very
  strict opinion when it comes to source code. One of his opinions is
  that syntax highlighting has to be as unobstrusive as possible and
  hence should highlight comments, keywords, and literals only. As a
  consequence, Syntax intentionally(!) reduces the syntax highlighting
  of [Highlight.js](https://highlightjs.org/) to exactly these three
  kinds of syntactical elements.

- **Anchors and Markers**:
  In technical documentation it is regularily necessary to mark
  arbitrary pieces of code and interspice reference anchors.
  Unfortunately, whatever syntax is used for marking and anchoring,
  this always conflicts with the language-dependent syntax highlighting
  as the marking and anchoring renders the source code invalid. Syntax
  resolves this problem by first reducing enriched text to plain text
  and reapplying the marking and anchoring during output generation.

- **Arbitrary Output Formats**:
  Usually the supported XML/HTML output format is sufficient, but
  sometimes one also wants to support other formats and for this one
  needs the precise offset information for anchors, markings, comments,
  keywords and literals. Syntax supports this by internally using such
  an offset based markup information and also exposing it in the API.

Installation
------------

#### Node environments (with NPM package manager):

```shell
$ npm install syntax
```

#### Browser environments (with Bower package manager):

```shell
$ bower install syntax
```

Example
-------

```js
import Syntax from "syntax"

let syntax = new Syntax({
    language: "javascript",
    cssPrefix: ""
})

syntax.richtext(
    "/* sample comment */\n" +
    "={function foo}= (bar, quux) {\n" +
    "    return 42 =(1)=\n" +
    "}\n"
)

console.log(syntax.plaintext())
// +--- output: ---------------------------
// | /* sample comment */\n
// | function foo (bar, quux) {\n
// |     return 42 \n
// | }\n
// +---------------------------------------

console.log(require("util").inspect(syntax.markup(), { depth: null }))
// +--- output: ---------------------------
// | { anchor:  { '1': 62 },
// |   marker:  [ [ 21, 33 ] ],
// |   comment: [ [ 0, 20 ] ],
// |   keyword: [ [ 21, 29 ], [ 52, 58 ] ],
// |   literal: [ [ 59, 61 ] ] }
// +---------------------------------------

console.log(syntax.html())
// +--- output: ---------------------------
// | <span class="comment">/* sample comment */</span>\n
// | <span class="keyword"><span class="marker">function</span></span><span class="marker"> foo</span> (bar, quux) {\n
// |     <span class="keyword">return</span> <span class="literal">42</span> <span class="anchor anchor-1"></span>\n
// | }\n
// +---------------------------------------
```

Application Programming Interface (API)
---------------------------------------

### Class `Syntax`

- Constructor: `Syntax(config?: Object): Syntax`<br/>
  Create a new syntax highlighting instance with
  optional configuration settings.

- Method: `Syntax#config(config?: Object): Syntax`<br/>
  Set configuration settings.

- Method: `Syntax#richtext(input: String): Syntax`<br/>
  Set the rich input text to process.

- Method: `Syntax#plaintext(): String`<br/>
  Get the plain output text after removing explicit markers and anchors.

- Method: `Syntax#markup(): Markup`<br/>
- Method: `Syntax#markup(markup?: Markup): Syntax`<br/>
  Get or set the markup information.

- Method: `Syntax#html(): String`<br/>
  Apply the output markup information onto the output plain text and
  render the result as XML/HTML based on interweaved `<span>` tags.

Implementation Notice
---------------------

Although Syntax is written in ECMAScript 6, it is transpiled to ECMAScript
5 and this way runs in really all(!) current (as of 2015) JavaScript
environments, of course.

License
-------

Copyright (c) 2015 Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

