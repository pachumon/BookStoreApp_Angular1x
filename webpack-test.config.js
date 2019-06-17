const path = require("path");
const ROOT = path.resolve(__dirname, "js");

module.exports = {
  context: ROOT,

  resolve: {
    extensions: [".ts", ".js"]
  },

  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "raw-loader"
      }
    ]
  },

  devtool: "inline-source-map",
  devServer: {}
};
