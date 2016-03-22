var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    __dirname + '/app/entry'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    },
    {test: /\.styl/, loader: 'style-loader!css-loader!stylus-loader'}
  ]
  },
  resolve: {
    alias: {
      "app" : __dirname + '/app',
      "style": __dirname + '/app/style',
      "bootstrap": "react-bootstrap"
    },
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.json', '.jsx', '.json', '.styl', '.css']
  },

}
