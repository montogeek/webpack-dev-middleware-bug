const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("../webpack.config.js");
const compiler = webpack(config);

const express = require("express");
const app = express();

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    logLevel: 'trace'
  })
);

app.get("/", function(req, res) {
  res.send("Hello World!!!");
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
