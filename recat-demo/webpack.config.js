const path = require('path');

const HtmlWebpackPlugin=require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CleanWebpackPlugin =require('clean-webpack-plugin');

module.exports={
    entry:{
        pageA:'./src/js/pageA.js',
        pageB:'./src/js/pageB.js'
    },
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'js/[name].js',
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    // style-loader 把css直接写入html中style标签
                    fallback:'style-loader',
                    // css-loader css中import支持
                    // loader执行顺序 从右往左执行
                    use:['css-loader','sass-loader']
                }),
                exclude:/node_modules/
            },
            {
                test:/\.js?$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
            {
                test:/\.(png|jpg|gif|ttf|eot|woff(2)?)(\?[=a-z0-9]+)?$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            query:{
                                // 阈值 单位byte
                                name: 'img/[name].[ext]',
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('css/[name].css'),
        new CleanWebpackPlugin(
            // 需要删除的文件夹或文件
            [path.join(__dirname, './dist/*')],
            {
                // root目录
                root: path.join(__dirname, './')
            }
        ),
        new HtmlWebpackPlugin({
            template:'./src/templet.html',
            filename:'pageA.html',
            title:'pageA',
            chunks:['pageA'],
            hash:true,
            minify:{
                removeAttributeQuotes:true
            }
        }),
        new HtmlWebpackPlugin({
            template:'./src/templet.html',
            filename:'pageB.html',
            title:'pageB',
            chunks:['pageB'],
            hash:true,
            minify:{
                removeAttributeQuotes:true
            }
        })
    ]
}