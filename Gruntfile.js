module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      dist: ['js/*.js', '!js/all.js'],
      options: {
        force: true,
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },
    sass: {
      dist: {
        files: {
          'css/main.css': 'sass/main.scss'
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', function(){
    var tasks = ['jshint', 'sass'];

    grunt.option('force', true);
    grunt.task.run(tasks);
  });
};