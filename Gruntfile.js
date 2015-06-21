/**
 * Created by toster-pc on 02.06.2015.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        'http-server': {
            'root': {
                root : "",
                host : "127.0.0.1",
                port : function(){ return 8585; }
            }
        }
    });

    grunt.loadNpmTasks('grunt-http-server');

    // Default task(s).
    grunt.loadTasks('./tasks/');

    grunt.registerTask(
        'default',
        [
            'http-server'
        ]);

};