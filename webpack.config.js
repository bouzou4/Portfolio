const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => ({
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./dist",
    historyApiFallback: true,
  },
  watch: argv.mode === "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "application/font-woff",
        },
      },
      {
        test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "application/octet-stream",
        },
      },
      {
        test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
        generator: {
          publicPath: "img/",
          outputPath: "img/",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/base.html",
    }),
    new webpack.ProvidePlugin({
      _: "lodash",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      "window.$": "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
});
