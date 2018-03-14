
module.exports = function(grunt){



  grunt.initConfig({
    concat: {
      js: {
        src: ['js/config/routeConfig.js', 'js/config/serialGeneratorConfig.js'],
        dest: 'dist/js/config.js',
      },
      css: {
        src: ['css/app.css', 'css/ui.css'],
        dest: 'dist/css/styles.css',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

};
