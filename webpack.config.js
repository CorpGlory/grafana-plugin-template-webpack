const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackSystemRegister = require('webpack-system-register');


module.exports = {
  target: 'node',
  context: __dirname + "/src",
  entry: './module.js',
  devtool: 'inline-source-map',
  output: {
    filename: "module.js",
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    "app/plugins/sdk": "app/plugins/sdk"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([
      { from: 'plugin.json' },
    ]),
    new CopyWebpackPlugin([
      { from: 'plugin.json' },
      //{ from: 'module.js', 'module.js' }
    ])
    // ,
    // new WebpackSystemRegister({
    //   systemjsDeps: ["app/plugins/sdk"]
    // })
  ],
  resolve: {
  },
  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     exclude: /(node_modules)/,
    //     use: {
    //       loader: 'babel-loader',
    //       options: {
    //         presets: ['env']
    //       }
    //     }
    //   }
    // ]
  }
}