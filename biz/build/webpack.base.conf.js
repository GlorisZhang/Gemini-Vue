var path = require('path');
var webpack = require('webpack');
var config = require('../config');
var utils = require('./utils');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var projectRoot = path.resolve(__dirname, '../');
var taurusPath = process.env.NODE_ENV === 'production' ? config.build.taurusPath : config.dev.taurusPath;

var baseWebpackConfig = {
  entry: utils.getEntries(),
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'taurus': taurusPath
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [projectRoot, taurusPath],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'file',
        query: {
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file',
        query: {
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  },
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin(utils.getVendorEntryNames(), '[name].js')
  ],
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders()
  }
};

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  // ignore vendor entry
  if (utils.isVendorEntry(name)) {
    return;
  }

  var htmlConf = {
    filename: name.concat('.html'),
    template: baseWebpackConfig.entry[name].slice(0, -3).concat('.html'),
    inject: true,
    chunks: utils.getVendorEntryNames().concat([name]),
    chunksSortMode: function (a, b) {
      return a.contains('vue-vendor') ? 1 : -1;
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  };
  baseWebpackConfig.plugins.push(new HtmlWebpackPlugin(htmlConf));
});

module.exports = baseWebpackConfig;
