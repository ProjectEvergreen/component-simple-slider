const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  mode: 'development',

  context: path.resolve('./reference-app'),

  entry: {
    index: './app'
  },
  
  module: {
    rules: [{
      test: /\.js$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      exclude: path.join(__dirname, 'node_modules')
    }, {
      test: /\.css$/,
      use: ['css-to-string-loader', 'css-loader', 'postcss-loader'],
      exclude: path.join(__dirname, 'node_modules')
    }]
  },

  plugins: [

    new HtmlWebpackPlugin({
      template: './index.html',
      chunksSortMode: 'dependency'
    })
  
  ]

};