// Document https://webpack.github.io/docs/configuration.html

const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname),
  stats: {
    hash: false,
    version: true,
    timings: false,
    assets: true,
    chunks: false,
    chunkModules: false,
    modules: false,
    cached: true,
    reasons: true,
    source: false,
    errorDetails: true,
    chunkOrigins: false,
    modulesSort: false,
    chunksSort: false,
    assetsSort: false,
    colors: true
  },
  entry: {
    book: './src/index.js',
  },
  output: {
    path: './public/dest',
    filename: '[name].js'
  },
  resolve: {
    root: [path.join(__dirname, 'node_modules')],
    extensions: ['', '.js', '.coffee', '.jsx'],
    alias: {
      underscore: 'lodash'
    }
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony', exclude: /node_modules/ },
      { test: /\.(?:js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
