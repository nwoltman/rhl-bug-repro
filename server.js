'use strict';

const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(webpackConfig);

app.use(morgan('dev'));

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    assets: false,
    hash: false,
    modules: false,
    version: false,
  },
}));

app.use(webpackHotMiddleware(compiler, {log: false}));

// Serve index.html
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(fs.readFileSync(path.join(__dirname, 'src/index.html')));
});

app.listen(8080, 'localhost', (err) => {
  if (err) {
    throw err;
  }
  console.log('🌎 Listening at http://localhost:8080/');
});
