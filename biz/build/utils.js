var path = require('path');
var glob = require('glob');
var config = require('../config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path)
};

exports.taurusAssetsPath = function () {
  var taurusPath = process.env.NODE_ENV === 'production'
      ? config.build.taurusPath
      : config.dev.taurusPath;
  return path.join(taurusPath, 'assets/');
};

exports.cssLoaders = function (options) {
  options = options || {};
  // generate loader string to be used with extract text plugin
  function generateLoaders(loaders) {
    var sourceLoader = loaders.map(function (loader) {
      var extraParamChar;
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?');
        extraParamChar = '&';
      } else {
        loader = loader + '-loader';
        extraParamChar = '?';
      }
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '');
    }).join('!');

    if (options.extract) {
      return ExtractTextPlugin.extract('vue-style-loader', sourceLoader);
    } else {
      return ['vue-style-loader', sourceLoader].join('!');
    }
  }

  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return {
    css: generateLoaders(['css']),
    postcss: generateLoaders(['css']),
    less: generateLoaders(['css', 'less']),
    sass: generateLoaders(['css', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'sass']),
    stylus: generateLoaders(['css', 'stylus']),
    styl: generateLoaders(['css', 'stylus'])
  };
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = [];
  var loaders = exports.cssLoaders(options);
  for (var extension in loaders) {
    var loader = loaders[extension];
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    });
  }
  return output
};

exports.getEntries = function () {
  var pathDir = 'src/';
  var globPath = pathDir.concat('**/index.js');

  var entries = {};
  var entry, dirname, pathname;
  var files = glob.sync(globPath);

  for (var i = 0; i < files.length; i++) {
    entry = files[i];
    dirname = path.dirname(entry);
    pathname = dirname.replace(new RegExp('^' + pathDir), '');

    var entryKey = pathname.concat('/').concat(path.basename(entry).slice(0, -3));
    entries[entryKey] = './' + entry;
  }

  // process vendor entry
  Object.assign(entries, config.common.vendorEntry);

  return entries;
};

exports.getVendorEntryNames = function () {
  var vendorChunks = [];

  Object.keys(config.common.vendorEntry).forEach(function (name) {
    vendorChunks.push(name);
  });

  return vendorChunks;
};

exports.isVendorEntry = function (name) {
  return config.common.vendorEntry.hasOwnProperty(name);
};
