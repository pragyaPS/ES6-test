const webpack = require('webpack'),
      path = require('path');

const APP_SOURCE = path.resolve(__dirname, 'src');
const APP_DISTINATION = path.resolve(__dirname, 'dist');

module.exports = {
  context: APP_SOURCE,
  entry: {
    main: './main.js',
  },
  output: {
    path: APP_DISTINATION,
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader:'babel-loader',
        query:{
          presets: ['es2015','react']
        }
      }
    ]
  }
}
