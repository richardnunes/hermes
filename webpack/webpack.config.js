const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './public/js/index.js',
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist'),
        publicPath: ""
    },
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
