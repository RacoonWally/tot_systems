const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    output: {
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
                test: /\.(css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },

            {
                test: /\.s[ca]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],

    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "public/index.html"
            }
        ),
        new MiniCssExtractPlugin()
    ],


};
