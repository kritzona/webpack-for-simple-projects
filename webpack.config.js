const path = require('path')
const webpack = require('webpack')

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
    path: path.resolve(__dirname, '/dist'),
    publicPath: path.resolve(__dirname, '/public'),
  },
  plugins: [],
  module: {
    rules: [],
  },
}
