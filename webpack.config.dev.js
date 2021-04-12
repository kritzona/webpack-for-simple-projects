const path = require('path')
const webpack = require('webpack')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    hot: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Webpack-конфигурация для простых проектов',
      template: path.resolve(__dirname, './public/index.html'),
      inject: 'body',
    }),
    new WebpackBar({
      name: 'Development-сборка',
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/i,
        use: ['ts-loader'],
      },
      {
        test: /\.m?(js|jsx)$/i,
        exclude: /node_modules/i,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(sass|scss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: ['svg-inline-loader'],
      },
    ],
  },
}
