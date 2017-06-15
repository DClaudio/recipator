const webpack = require('webpack')
const path = require('path')
    const HtmlWebpackPlugin = require('html-webpack-plugin')

const sourceRoot = path.resolve('./src')
const outputRoot = path.resolve(`./build`)

module.exports = {
    target: 'web',
    context: sourceRoot,
    entry: {
        main: ['./index.jsx']
    },
    output: {
        path: outputRoot,
        publicPath: '/',
        filename: 'javascripts/[name]-[hash].js'
    },
    resolve: {
        alias: {
            '~': sourceRoot
        },
        extensions: [
            '.js', '.jsx', '.json'
        ],
        unsafeCache: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { cacheDirectory: true }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            // {
            //     test: /\.scss$/,
            //     loaders: ['style-loader', `css?root=${sourceRoot}`, 'sass']
            // },
            {
                // Images
                test: /\.(jpg|gif|png|svg|ico)(\?.*)?$/,
                loader: 'file?name=[path][name].[ext]'
            },
            {
                // Fonts
                test: /\.(eot|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file?name=[path][name].[ext]'
            },
            {
                // Audio
                test: /\.(ogg|wav|mp3)(\?.*)?$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html.ejs',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
                BROWSER: JSON.stringify(true)
            }
        })
    ]
}