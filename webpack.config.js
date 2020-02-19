const isDev = process.env.NODE_ENV === "development";
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: isDev ? "development" : "production",
  entry: [
    "@babel/polyfill", // enables async-await
    "./client/index.js"
  ],
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Output Management",
      title: "Caching"
    })
  ],
  output: {
    // path: __dirname,
    filename: "./public/bundle.js",
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
