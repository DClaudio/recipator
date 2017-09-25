const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin');


const outputRoot = path.resolve('./build')

module.exports = merge(common, {
    output: {
        path: outputRoot,
        publicPath: '/',
        filename: '[name]-[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin([outputRoot]),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
                BROWSER: JSON.stringify(true)
            }
        })
    ]
})