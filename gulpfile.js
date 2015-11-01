'use strict';

var env = require('./config/environment');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['browser-sync'], function() {});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: env.BASE_URL,
    files: ['public/**/*.*'],
    browser: 'google chrome',
    port: 7000
  });
});

gulp.task('nodemon', function(callback) {
  var started = false;

  return nodemon({
    script: 'app.js'
  }).once('start', callback);
});
