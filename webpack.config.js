/* eslint-disable */

const path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'typeOf',
    libraryTarget: 'commonjs'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js']
  },
  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     loader: 'babel-loader'
    //   }
    // ]
  }
};
