const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: '**/node_modules',
  },
  output: {
    filename: 'common.js',
    path: path.resolve(__dirname, 'dist', 'js'),
  },
  plugins: [new MiniCssExtractPlugin({ filename: '../css/style.css' })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Extract CSS into file
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
