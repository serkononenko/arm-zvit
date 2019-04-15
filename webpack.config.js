require('dotenv').config();
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'production',

    entry: './view/src/index.js',

    devtool: 'inline-source-map',

    devServer: {
        contentBase: path.resolve(__dirname, './view/dist')
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        minimizer: [
            new TerserPlugin({
                test: [/\.js(\?.*)?$/i]
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            favicon: 'view/src/assets/favicon.ico',
            template: 'view/src/assets/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images'
                        },
                    },
                ],
            }
        ]
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './view/dist')
    }

};