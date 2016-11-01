var PATH = require('path');
var WEBPACK = require('webpack');


module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: ['babel-polyfill', './src/client/index.js'],
    //hotMiddleware: 'webpack-hot-middleware/client?path=/dist',
  },
  output: {
    path: PATH.resolve(__dirname, './public/dist'),
    filename: 'bundle.js',
    publicPath: PATH.resolve(__dirname, './public')
  },
  plugins: [
    new WEBPACK.optimize.OccurenceOrderPlugin(),
    //new WEBPACK.HotModuleReplacementPlugin(),
    new WEBPACK.NoErrorsPlugin(),
    // new WEBPACK.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    //   }
    // })
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
            presets: [ 'es2015', 'react' ]
        }
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'raw']
        }
    ]
  },
  resolve: {
      extension: ['', '.js'],
      modulesDirectories: ['node_modules']
  }
};
