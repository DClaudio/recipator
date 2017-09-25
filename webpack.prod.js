const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const outputRoot = path.resolve(`./dist`)

module.exports = merge(common, {
    output: {
        path: outputRoot,
        publicPath: '/',
        filename: '[name]-[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin([outputRoot]),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
                BROWSER: JSON.stringify(true)
            }
        })
    ]
})