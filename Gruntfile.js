// intelli-ccs Gruntfile
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: {
          'src/css/main.css': 'src/less/app.less'
        }
      }
    },
    watch: {
      css: {
        files: ['src/**/*.less'],
        tasks: ['less']
      }
    }
  });
  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  // Default task(s).
  grunt.registerTask('default', ['less', 'watch']);
};
