const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

// 定位项目输出的目录在哪，指定具体的路径_dirname,path.resolve
// console.log(path.resolve(__dirname, 'dist'))

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader'
        }]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }
    ]
  },
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'src/utils')
    },
    extensions: ['.js', '.json', '.css', '.less']
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlwebpackPlugin({
      file: 'index.html',
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets/favicon.ico',
        to: 'favicon.ico'
      }
    ]),
    // lodash 作为工具，是很多组件会使用的，省去了到处import
    new webpack.ProvidePlugin({
      '_': 'lodash'
    })
  ],
  devServer: {
    port: '1314',
    before (app) {
      app.get('/api/test.json', (req, res) => {
        res.json({
          code: 200,
          message: 'hello world'
        })
      })
    }
  }
}