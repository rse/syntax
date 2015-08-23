
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-clean")
    grunt.loadNpmTasks("grunt-contrib-copy")
    grunt.loadNpmTasks("grunt-bower-install-simple")
    grunt.initConfig({
        "bower-install-simple": {
            "main": {
                options: {
                    color:       true,
                    production:  true,
                    directory:   "bower_components"
                }
            }
        },
        copy: {
            "normalize": {
                src: [ "bower_components/normalize.css/normalize.css" ],
                dest: "lib/normalize.css"
            },
            "jquery": {
                src: [ "bower_components/jquery/dist/jquery.js" ],
                dest: "lib/jquery.js"
            },
            "typopro": {
                files: [
                    { expand: true, flatten: true, cwd: "bower_components/typopro-web/web",
                      src: "TypoPRO-DejaVu/TypoPRO-DejaVuSansMono-*", dest: "lib/" },
                    { expand: true, flatten: true, cwd: "bower_components/typopro-web/web",
                      src: "TypoPRO-OpenSans/TypoPRO-OpenSans-Regular.*", dest: "lib/" },
                    { expand: true, flatten: true, cwd: "bower_components/typopro-web/web",
                      src: "TypoPRO-OpenSans/TypoPRO-OpenSans-Bold.*", dest: "lib/" }
                ]
            },
            "combinumerals": {
                files: [{
                    expand: true, flatten: false, cwd: "bower_components/combinumerals",
                    src: "CombiNumeralsLtd.*",
                    dest: "lib/"
                }]
            },
            "syntax": {
                src: [ "bower_components/syntax/lib/syntax.browser.js" ],
                dest: "lib/syntax.js"
            },
        },
        clean: {
            clean:     [ "lib" ],
            distclean: [ "node_modules", "bower_components" ]
        }
    })
    grunt.registerTask("default", [ "bower-install-simple", "copy" ])
}

