
module.exports = function(grunt){


  grunt.registerTask("speak", function(){
    console.log("speak task");
  });

  grunt.registerTask("yell", function(){
    console.log("yell task");
  });

  grunt.registerTask("default", ['yell', 'speak']);





  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
        dest: 'dist/built.js',
      },
    },
  });

};
