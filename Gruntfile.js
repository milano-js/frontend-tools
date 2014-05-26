module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  require('load-grunt-tasks')(grunt);


  grunt.registerTask('default', function () {
    var tasks = [];

    grunt.option('force', true);
    grunt.task.run(tasks);
  });
};