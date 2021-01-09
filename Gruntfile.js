/*
**  Syntax -- Unobtrusive Syntax Highlighting
**  Copyright (c) 2015-2021 Dr. Ralf S. Engelschall <rse@engelschall.com>
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

/* global module: true */
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-clean")
    grunt.loadNpmTasks("grunt-browserify")
    grunt.loadNpmTasks("grunt-mocha-test")
    grunt.loadNpmTasks("grunt-eslint");

    grunt.initConfig({
        version: grunt.file.readYAML("VERSION.yml"),
        eslint: {
            options: {
                configFile: "eslint.yaml"
            },
            "syntax": [ "src/**/*.js", "tst/**/*.js" ]
        },
        browserify: {
            "syntax-browser": {
                files: {
                    "lib/syntax.browser.js": [ "src/**/*.js" ]
                },
                options: {
                    transform: [
                        [ "browserify-replace", { replace: [
                            { from: /\$major/g, to: "<%= version.major %>" },
                            { from: /\$minor/g, to: "<%= version.minor %>" },
                            { from: /\$micro/g, to: "<%= version.micro %>" },
                            { from: /\$date/g,  to: "<%= version.date  %>" }
                        ]}],
                        [ "babelify", {
                            presets: [
                                [ "@babel/preset-env", {
                                    "targets": {
                                        "browsers": "last 8 versions, > 1%, ie 11"
                                    }
                                } ]
                            ],
                            plugins: [ [ "@babel/transform-runtime", {
                                "helpers":     false,
                                "regenerator": false
                            } ] ]
                        } ],
                        [ "uglifyify", { sourceMap: false, global: true } ]
                    ],
                    plugin: [
                        [ "browserify-derequire" ],
                        [ "browserify-header" ]
                    ],
                    browserifyOptions: {
                        standalone: "Syntax",
                        debug: true
                    }
                }
            },
            "syntax-node": {
                files: {
                    "lib/syntax.node.js": [ "src/**/*.js" ]
                },
                options: {
                    transform: [
                        [ "browserify-replace", { replace: [
                            { from: /\$major/g, to: "<%= version.major %>" },
                            { from: /\$minor/g, to: "<%= version.minor %>" },
                            { from: /\$micro/g, to: "<%= version.micro %>" },
                            { from: /\$date/g,  to: "<%= version.date  %>" }
                        ]}],
                        [ "babelify", {
                            presets: [
                                [ "@babel/preset-env", {
                                    "targets": {
                                        "node": "8.0.0"
                                    }
                                } ]
                            ],
                            plugins: [ [ "@babel/transform-runtime", {
                                "helpers":     false,
                                "regenerator": false
                            } ] ]
                        } ]
                    ],
                    plugin: [
                        [ "browserify-derequire" ],
                        [ "browserify-header" ]
                    ],
                    external: [
                        "tokenizr",
                        "highlight.js/lib/highlight",
                        "highlight.js/lib/languages/xml",
                        "highlight.js/lib/languages/css",
                        "highlight.js/lib/languages/less",
                        "highlight.js/lib/languages/http",
                        "highlight.js/lib/languages/json",
                        "highlight.js/lib/languages/yaml",
                        "highlight.js/lib/languages/ini",
                        "highlight.js/lib/languages/cpp",
                        "highlight.js/lib/languages/objectivec",
                        "highlight.js/lib/languages/swift",
                        "highlight.js/lib/languages/cs",
                        "highlight.js/lib/languages/fsharp",
                        "highlight.js/lib/languages/go",
                        "highlight.js/lib/languages/java",
                        "highlight.js/lib/languages/kotlin",
                        "highlight.js/lib/languages/groovy",
                        "highlight.js/lib/languages/scala",
                        "highlight.js/lib/languages/javascript",
                        "highlight.js/lib/languages/typescript",
                        "highlight.js/lib/languages/php",
                        "highlight.js/lib/languages/perl",
                        "highlight.js/lib/languages/python",
                        "highlight.js/lib/languages/ruby",
                        "highlight.js/lib/languages/shell",
                        "highlight.js/lib/languages/bash",
                        "highlight.js/lib/languages/powershell",
                        "highlight.js/lib/languages/makefile",
                        "highlight.js/lib/languages/sql",
                        "highlight.js/lib/languages/markdown",
                        "highlight.js/lib/languages/diff",
                        "sax"
                    ],
                    browserifyOptions: {
                        standalone: "Syntax",
                        debug: false
                    }
                }
            }
        },
        mochaTest: {
            "syntax": {
                src: [ "tst/*.js", "!tst/common.js" ]
            },
            options: {
                reporter: "spec",
                require: "tst/common.js"
            }
        },
        clean: {
            browserify: [ "lib/syntax.browser.map" ],
            clean: [],
            distclean: [ "node_modules" ]
        }
    })

    grunt.registerTask("default", [ "eslint", "browserify", "clean:browserify", "mochaTest" ])
}

