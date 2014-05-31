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
    },
    autoprefixer: {
      options: {
        browsers: ['last 1 version', 'ie 8']
      },
      all: {
        src: ['css/main.css']
      }
    },
    watch: {
      sass: {
        files: 'sass/*.scss',
        tasks: ['sass', 'autoprefixer']
      },
      jsHint: {
        files: ['Gruntfile.js', 'js/*.js', '!js/all.js'],
        tasks: ['jshint']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', function(){
    var tasks = ['jshint', 'sass', 'autoprefixer', 'watch'];

    grunt.option('force', true);
    grunt.task.run(tasks);
  });
};