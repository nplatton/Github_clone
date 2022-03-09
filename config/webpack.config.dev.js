const path = require("path");
const config = require("./webpack.config.js");

config.devServer = {
  historyApiFallback: true,
  contentBase: path.resolve("src"),
  port: 6969,
  hot: true,
  open: true,
  host: "0.0.0.0",
  watchContentBase: true,
  writeToDisk: true,
  liveReload: true,
};

config.devtool = "inline-source-map";

module.exports = config;
