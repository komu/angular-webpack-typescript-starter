"use strict";
var path = require('path');
var WebpackConfig = require('webpack-config');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = new WebpackConfig().merge({
    entry: "./app/boot.ts",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "main.js"
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: "tslint"
            }
        ],

        loaders: [
            { test: /\.css$/,           loader: "style!css" },
            { test: /\.scss$/,          loader: "style!css!sass" },
            { test: /\.ts$/,            loader: 'awesome-typescript-loader' },
            { test: /\.woff(\?.+)?$/,   loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?.+)?$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?.+)?$/,    loader: "file-loader" },
            { test: /\.eot(\?.+)?$/,    loader: "file-loader" },
            { test: /\.svg(\?.+)?$/,    loader: "file-loader" },
            { test: /\.html/,           loader: 'raw' }
        ]
    },

    tslint: {
        configuration: require('./tslint.json')
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
});
