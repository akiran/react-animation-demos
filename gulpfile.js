var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('server', function (callback) {
  var myConfig = require('./webpack.config.js');
  
  var webpackCompiler = webpack(myConfig, function(err, stats) {
  });

  new WebpackDevServer(webpackCompiler, {
    contentBase: './src',
    hot: true,
    debug: true
  }).listen(8000, 'localhost', function (err, result) {
    
  });
});