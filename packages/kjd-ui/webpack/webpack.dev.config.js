/*
 * @Author: xiaozhuo
 * @Date: 2020-08-13 21:06:13
 * @LastEditTime: 2020-08-13 21:29:54
 * @LastEditors: xiaozhuo
 * @Description: 
 * @Enuma Elish
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './develop/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 7777
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'i/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.(styl|stylus)$/,
                use: [
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../develop/index.html'),
        }),
    ]
};