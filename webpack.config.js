const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '/src/index.ts'),
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: path.resolve(__dirname, './public'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      title: 'Webpack-конфигурация для простых проектов',
    }),
  ],
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
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
