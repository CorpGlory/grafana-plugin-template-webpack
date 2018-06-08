const baseWebpackConfig = require('./webpack.base.conf');

var conf = baseWebpackConfig;
conf.watch = true;
conf.devtool = "source-map";

module.exports = conf;
module.exports.mode = 'development';
