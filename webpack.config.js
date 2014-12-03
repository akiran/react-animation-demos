var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer-core');

module.exports = {
  devtool: '#inline-source-map',
  entry: [
    'webpack-dev-server/client?' + 'http://localhost:8000',
    'webpack/hot/only-dev-server',
    './src/app.jsx'
  ],
  output: {
    path: path.join(__dirname),
    filename: 'app.js',
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loaders: ['react-hot', 'jsx']},
      {
        test: /\.scss$/,
        loader: "style!css!postcss!sass?outputStyle=expanded&includePaths[]=" + 
            (path.resolve(__dirname, './node_modules')) + "&includePaths[]=" + (path.resolve(__dirname, './bower_components'))
      },
    ],
  },
  postcss: [ autoprefixer({ browsers: ['last 2 version'] }) ],
  resolve : {
    alias: {

    },
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/vertx/)
  ]
};