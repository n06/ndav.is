module.exports = function(grunt) {
grunt.initConfig({
    less: {
        development: {
            options: {
                compress: true,
                yuicompress: true,
                optimization: 2
            },
            files: {
                // target.css file: source.less file
                "css/base.css": "css/less/base.less"
            }
        }
    },
    watch: {
        styles: {
            // Which files to watch (all .less files recursively in the less directory)
            files: ["css/less/*"],
            tasks: ['less'],
            options: {
                livereload: true,
            }
        }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          keepalive: true
        }
      }
    }
});

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');

grunt.registerTask('default', ['connect', 'watch']);
};
