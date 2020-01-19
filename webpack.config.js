const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  context: path.resolve(__dirname, 'client'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.jsx'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: isDev ? 'source-map' : '',
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      }
    ]
  }
}