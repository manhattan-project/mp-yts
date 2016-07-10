import webpack from 'webpack'

export default {
  entry: {
    'mp-yts': ['./src']
  },
  output: {
    path: 'lib',
    library: 'YTS',
    libraryTarget: 'umd',
    filename: '[name].js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0'],
          plugins: [
            'transform-class-properties',
            ['transform-runtime', {
              polyfill: false,
              regenerator: true
            }]
          ]
        }
      }
    ],
  },
  plugins: []
}
