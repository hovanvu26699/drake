"use strict";

var watch = require("grunt-contrib-watch");

module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: "compressed"
        },
        files: {
          "src/styles/pages/style.css": "src/styles/pages/home.scss"
        }
      }
    },
    watch: {
      sass: {
        files: "src/**/*.scss",
        tasks: ["sass"]
      }
    }
  }); // Load compiler sass

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch"); // Resister task to run by grunt

  grunt.registerTask("default", ["watch", "sass"]);
};