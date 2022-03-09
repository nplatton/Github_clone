const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log(__dirname);
const Dotenv = require("dotenv-webpack");

const ROOT_DIRECTORY = path.join(__dirname, "../");
const PUBLIC_DIRECTORY = path.join(ROOT_DIRECTORY, "public");

const config = {
  entry: [path.resolve(__dirname, "../src/index.js")],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: "development",
  resolve: {
    modules: [path.resolve(ROOT_DIRECTORY), "node_modules"],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PUBLIC_DIRECTORY, "index.html"),
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: `public/index.html`,
      favicon: `src/images/icone-github-orange.png`,
    }),
    new Dotenv(),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ["file-loader"],
      },
    ],
  },
};

module.exports = config;
