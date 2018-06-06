const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: [
        './src/index.js'
    ],
    plugins: [
            new CleanWebpackPlugin(['public']),
            new HtmlWebpackPlugin({
                title: 'Production',
                template: 'src/index.html'
            }),
            new webpack.DefinePlugin({
                "API_URL": JSON.stringify("https://powerful-coast-62106.herokuapp.com/api/")
            })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name:"assets/img/[name][hash:7].[ext]"

                    }
                }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx','.css']
    },
    output: {
        path: __dirname + '/public',
        publicPath: '',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public'
    }
};

module.exports = config;