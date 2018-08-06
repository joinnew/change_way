const path = require('path')
const webpack = require('webpack')
const poststylus = require('poststylus')
const autoprefixer = require('autoprefixer')


function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports.stylusLoaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
  options: {
    stylus: {
      use: [
        poststylus([
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 version',
              'Firefox ESR',
              'not ie < 9'
            ],
            flexbox: 'no-2009',
          })
        ])
      ]
    }
  }
})

module.exports.rootPath = resolve('src')