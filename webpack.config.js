const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  target: 'node',
  context: __dirname + "/src",
  entry: './module.js',
  output: {
    filename: "module.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "amd"
  },
  externals: {
    "app/plugins/sdk": "app/plugins/sdk"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([
      { from: 'plugin.json' },
    ])
  ],
  resolve: {
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}