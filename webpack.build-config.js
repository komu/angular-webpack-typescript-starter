"use strict";
var webpack = require('webpack');
var WebpackConfig = require('webpack-config');
var AssetsPlugin = require('assets-webpack-plugin');
var path = require('path');

var commonConfig = new WebpackConfig().extend('./webpack.common-config.js');
module.exports = commonConfig.merge({
    output: {
        filename: 'main.[chunkhash].js',
        publicPath: '/assets/'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.[chunkhash].js", isVendorModule),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new AssetsPlugin({path: commonConfig.output.path})
    ]
});

var appDir = path.join(__dirname, 'app');

function isVendorModule(module) {
    return module.resource && module.resource.indexOf(appDir) === -1;
}
