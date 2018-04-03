const path = require('path');

module.exports = {

    devtool: 'inline-source-map',

    /*入口*/
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/bundle.js'
    },

    module: {
        rules: [
            {
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
            },
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },

    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '127.0.0.1'
    },

    resolve: {
        alias: {
            router: path.join(__dirname, 'src/router')
        }
    }
};
