
/* global jQuery: true */
/* global Syntax: true */
/* global document: true */
(function ($) {
    $(document).ready(function () {
        $("*[data-syntax]").each(function () {
            var language = $(this).data("syntax")
            var syntax = new Syntax({
                language: language,
                cssPrefix: "syntax-"
            })
            syntax.config({})
            var text = $(this).text()
            text = text
                .replace(/^(?:[ \t]*\r?\n)+/, "")
                .replace(/([ \t]*\r?\n)(?:[ \t]*\r?\n)*[ \t]*$/, "$1")
            syntax.richtext(text)
            var html = syntax.html()
            $(this).html(html)
            $(".syntax-anchor", this).each(function () {
                var m = $(this).attr("class").match(/syntax-anchor-(\S+)/)
                var num = m[1]
                $(this).addClass("cn-" + num + "-i")
            })
            $(this).addClass("syntax")
        })
    })
})(jQuery)

