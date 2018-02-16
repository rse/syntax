
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-clean")
    grunt.loadNpmTasks("grunt-contrib-copy")
    grunt.initConfig({
        copy: {
            "normalize": {
                src: [ "node_modules/normalize.css/normalize.css" ],
                dest: "lib/normalize.css"
            },
            "jquery": {
                src: [ "node_modules/jquery/dist/jquery.js" ],
                dest: "lib/jquery.js"
            },
            "typopro": {
                files: [
                    { expand: true, flatten: true, cwd: "node_modules/typopro-web/web",
                      src: "TypoPRO-DejaVu/TypoPRO-DejaVuSansMono-*", dest: "lib/" },
                    { expand: true, flatten: true, cwd: "node_modules/typopro-web/web",
                      src: "TypoPRO-OpenSans/TypoPRO-OpenSans-Regular.*", dest: "lib/" },
                    { expand: true, flatten: true, cwd: "node_modules/typopro-web/web",
                      src: "TypoPRO-OpenSans/TypoPRO-OpenSans-Bold.*", dest: "lib/" }
                ]
            },
            "combinumerals": {
                files: [{
                    expand: true, flatten: false, cwd: "node_modules/combinumerals",
                    src: "CombiNumeralsLtd.*",
                    dest: "lib/"
                }]
            },
            "syntax": {
                src: [ "node_modules/syntax/lib/syntax.browser.js" ],
                dest: "lib/syntax.js"
            },
        },
        clean: {
            clean:     [ "lib" ],
            distclean: [ "node_modules" ]
        }
    })
    grunt.registerTask("default", [ "copy" ])
}

