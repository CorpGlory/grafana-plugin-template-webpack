const path = require('path');
const webpack = require('webpack');
const moment = require('moment');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
    
const ExtractTextPluginBase = new ExtractTextPlugin('./css/panel.base.css');
const ExtractTextPluginLight = new ExtractTextPlugin('./css/panel.light.css');
const ExtractTextPluginDark = new ExtractTextPlugin('./css/panel.dark.css');
    
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const packageJson = require('../package.json');

module.exports = {
  target: 'node',
  context: resolve('src'),
  entry: './module.ts',
  output: {
    filename: "module.js",
    path: resolve('dist'),
    libraryTarget: "amd"
  },
  externals: [
    // remove the line below if you don't want to use buildin versions from grafana
    'jquery', 'lodash', 'moment', 'react', 'react-dom',
    function (context, request, callback) {
      var prefix = 'app/'; // the grafana bindings
      if (request.indexOf(prefix) === 0) {
        return callback(null, request);
      }
      prefix = 'grafana/'; // using the corpglory bindings
      if (request.indexOf(prefix) === 0) {
        return callback(null, request.substr(prefix.length));
      }
      callback();
    }
  ],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ngAnnotatePlugin(),
    new CopyWebpackPlugin([
      { from: '../README.md' },
      { from: 'plugin.json' },
      { from: 'partials/*' },
      { from: 'img/*' }
    ]),
    new ReplaceInFileWebpackPlugin([{
      dir: 'dist',
      files: ['plugin.json'],
      rules: [{
        search: '%VERSION%',
        replace: packageJson.version
      },{
        search: '%TODAY%',
        replace: moment().format('YYYY.MM.DD')
      }]
    }]),
    ExtractTextPluginBase,
    ExtractTextPluginLight,
    ExtractTextPluginDark,
  ],
  resolve: {
    alias: {
      'src': resolve('src')
    },
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /(external)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [
              require.resolve('babel-preset-env')
            ]
          }
        }
      },
      {
        test: /\.base\.(s?)css$/,
        use: ExtractTextPluginBase.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.light\.(s?)css$/,
        use: ExtractTextPluginLight.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.dark\.(s?)css$/,
        use: ExtractTextPluginDark.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  }
}
