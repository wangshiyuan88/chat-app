var PATH = require('path');
var WEBPACK = require('webpack');


module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: ['babel-polyfill', './src/client/index.js'],
  },
  output: {
    path: PATH.resolve(__dirname, './public/dist'),
    filename: 'bundle.js',
    publicPath: PATH.resolve(__dirname, './public')
  },
  plugins: [
    new WEBPACK.optimize.OccurenceOrderPlugin(),
    new WEBPACK.NoErrorsPlugin(),
    new WEBPACK.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
            PATH.resolve(__dirname, 'src', 'client')
        ],
        query: {
            presets: [ 'es2015', 'react', 'stage-2' ]
        },
        exclude: '/node_modules/'
      },
      {
        test: /\.scss?$/,
        loaders: ['style', 'css', 'sass'],
        include: [
            PATH.resolve(__dirname, 'public', 'scss')
        ]
      }
    ]
  },
  resolve: {
      extension: ['', '.js'],
      modulesDirectories: ['node_modules']
  }
};
