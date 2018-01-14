var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.join(__dirname, "dist"),
  CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
  context: CLIENT_DIR,
  entry: "./main",
  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
};
