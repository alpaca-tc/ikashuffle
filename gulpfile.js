'use strict';

const env = require('./config/environment');
const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const nodemon = require('gulp-nodemon');
const stylus = require('gulp-stylus');

const files = {
  stylus: ['./assets/stylus/index.styl']
}

gulp.task('webpack-dev-server', function() {
  const config = require('./webpack.config.js');
  // config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080', 'webpack/hot/dev-server');
  const compiler = webpack(config);
  const server = new webpackDevServer(compiler);
  // const server = new webpackDevServer(compiler, { hot: true, 'content-base': 'public/' });
  server.listen(8080);
});

gulp.task('default', ['webpack-dev-server', 'browser-sync', 'watch'], () => {});

gulp.task('browser-sync', ['nodemon'], () => {
  browserSync.init(null, {
    proxy: env.BASE_URL,
    files: ['public/**/*.*', 'views/**/*.*', 'src/**/*.*'],
    browser: 'google chrome',
    port: 7000
  });
});

gulp.task('watch', () => {
  watch(files.stylus, () => {
    gulp.start('stylus')
  });
});

gulp.task('stylus', () => {
  return gulp
    .src('./assets/stylus/index.styl')
    .pipe(stylus({ compress: true }))
    .pipe(gulp.dest('public'));
});

gulp.task('nodemon', (callback) => {
  return nodemon({
    script: 'app.js'
  }).once('start', callback);
});
