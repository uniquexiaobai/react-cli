const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        port: 8888,
        hot: true,
        overlay: true,
        historyApiFallback: true,
        open: true,
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};