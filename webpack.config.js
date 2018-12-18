'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    app: [
      // 'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './src/App',
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      React: 'react',
      ReactDOM: 'react-dom',
    },
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  node: false,
  performance: false,
  stats: {
    children: false,
    hash: false,
    modules: false,
  },
};
