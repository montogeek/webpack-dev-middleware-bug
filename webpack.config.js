const path = require("path");

module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/js/",
    libraryTarget: "window"
  }
};
