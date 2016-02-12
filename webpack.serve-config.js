"use strict";
var webpack = require('webpack');
var WebpackConfig = require('webpack-config');
var path = require('path');

var publicPath = 'http://localhost:8080/assets/';

module.exports = new WebpackConfig().extend('./webpack.common-config.js').merge({
    devtool: 'eval',
    debug: true,
    //output: {
    //    publicPath: publicPath
    //},
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js", isVendorModule),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        //port: 9090,
        //publicPath: publicPath,
        contentBase: './app',
        hot: true,
        inline: true,
        historyApiFallback: true
    }
});

// TODO: copy-paste from build-config
var appDir = path.join(__dirname, 'app');

function isVendorModule(module) {
    return module.resource && module.resource.indexOf(appDir) === -1;
}
