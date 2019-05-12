const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prodConfig = require('./webpack.prod.conf');
const devConfig = require('./webpack.dev.conf');

const baseConfig = {
    entry: {
        app: path.join(__dirname, '../src/index.js'),
        vendor: ['react', 'react-dom', 'react-router-dom', 'lodash']
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, '../src'),
                use: [
                    'babel-loader?cacheDirectory=true',
                    'eslint-loader'
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,

                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Cli',
            template: path.join(__dirname, '../index.html'),
        }),
    ],
};

module.exports = env => {
    let config = env === 'production' ? prodConfig : devConfig;

    return merge(baseConfig, config);
};
