const webpack = require("webpack");
const path = require("path");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("../webpack.config.js");
const compiler = webpack(config);

const express = require("express");
const app = express();

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    logLevel: 'debug'
  })
);

app.get("/", function(req, res) {
  res.sendFile('index.html', { root: 'src'});  
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// var browserSync = require("browser-sync").create();
// var webpack = require("webpack");
// var webpackDevMiddleware = require("webpack-dev-middleware");
// var webpackHotMiddleware = require("webpack-hot-middleware");
// /**
//  * Require ./webpack.config.js and make a bundler from it
//  */
// var webpackConfig = require("../webpack.config.js");
// var bundler = webpack(webpackConfig);
// /**
//  * Run Browsersync and use middleware for Hot Module Replacement
//  */
// browserSync.init({
//   cors: true,
//   https: false,
//   port: 3000,
//   open: "external",
//   logLevel: "debug",
//   online: false,
//   middleware: [
//     webpackDevMiddleware(bundler, {
//       publicPath: webpackConfig.output.publicPath,
//       stats: {
//         warnings: false,
//         chunks: false,
//         colors: true,
//         chunkModules: false
//       }
//     }),
//     webpackHotMiddleware(bundler)
//   ],
//   files: ["src/"]
// });
