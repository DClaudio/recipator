const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const sourceRoot = path.resolve('./src')

module.exports = {
    target: 'web',
    context: sourceRoot,
    entry: {
        main: ['./index.jsx']
    },
    devtool: 'source-map',  
    resolve: {
        alias: {
            '~': sourceRoot
        },
        extensions: [
            '.js', '.jsx', '.json', '.elm'
        ],
        unsafeCache: true
    },
    module: {
        loaders: [
            
            {
                test: /\.jsx?$/,
                exclude: [/elm-stuff/, /node_modules/],
                loader: 'babel-loader',
                query: { cacheDirectory: true }
            },
            {
              test:    /\.elm$/,
              exclude: [/elm-stuff/, /node_modules/],
              loader:  'elm-webpack-loader?verbose=true',
            },            
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                // Images
                test: /\.(jpg|gif|png|svg|ico)(\?.*)?$/,
                loader: 'file-loader?name=[path][name].[ext]'
            },
            {
                // Fonts
                test: /\.(eot|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file-loader?name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html.ejs',
            inject: 'body'
        }),
        new CopyWebpackPlugin([{
            from: './imgs',
            to: './imgs'
        }])
    ]
}