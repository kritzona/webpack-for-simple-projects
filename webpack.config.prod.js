const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBar = require('webpackbar')

const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/main.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack-конфигурация для простых проектов',
      template: path.resolve(__dirname, './public/index.html'),
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].bundle.css',
    }),
    new CleanWebpackPlugin(),
    new WebpackBar({
      name: 'Production-сборка',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerWebpackPlugin({
        exclude: /node_modules/i,
      }),
      new TerserWebpackPlugin({
        exclude: /node_modules/i,
      }),
    ],
  },
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
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(sass|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
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
