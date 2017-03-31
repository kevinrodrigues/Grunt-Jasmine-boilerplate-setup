module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }      }
    },
    watch: {
      files: ['spec/**/*.js', '**/*.js'],
      tasks: ['jshint', 'jasmine'],
    },
     jasmine: {
        pivotal: {
          src: 'src/**/*.js',
          options: {
            vendor: [
              'node_modules/jquery/dist/jquery.js'
            ],
            specs: 'spec/*Spec.js'
          }
        }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('test', ['jshint', 'jasmine']);
};