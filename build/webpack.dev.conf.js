const baseWebpackConfig = require('./webpack.base.conf');

var conf = baseWebpackConfig;
conf.watch = true;
conf.devtool = "eval-source-map";

module.exports = conf;
module.exports.mode = 'development';
