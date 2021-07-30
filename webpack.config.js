const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { glob } = require("glob");

const scss = glob.sync(resolve(__dirname, "{,!(node_modules)/**}", "*.scss"));

module.exports = {
  target: "web",
  entry: {
    browser: ["./app/index.tsx", "./resources/settings/index.tsx", ...scss],
  },
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: "ttf-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin()],
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist"),
  },
};
