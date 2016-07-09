import webpack from 'webpack'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import cfg from './webpack.base.config'

cfg.target = 'web'

cfg.entry = {
  ...cfg.entry,
  'mp-yts.min': ['babel-polyfill', './src']
}

cfg.plugins = [
  new CleanWebpackPlugin('lib'),
  ...cfg.plugins,
  new webpack.optimize.UglifyJsPlugin({
    include: /\.min\.js$/,
    compress: {
      warnings: false
    }
  })
]

export default cfg
