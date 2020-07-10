// const path = require('path');
// const { merge } = require('webpack-merge');
// const common = require('./webpack.common');

// module.exports = merge(common, {
//   mode: 'production',
//   output: {
//     filename: 'main.[contentHash].js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// });

const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      minify: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
