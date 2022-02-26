const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require("mini-css-extract-plugin")
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dabao.js'
    },

    module: {
        rules: [
            // {
            //     test: /\.css$/, use: ['style-loader', 'css-loader',]  //打包css 并在html中加载 
            // },
            {
                test: /\.css$/,
                use: [MiniCss.loader, "css-loader"]           //打包css并创建一个css文件
            },


            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings 把打包的css在html加载出来
                }, {
                    loader: "css-loader" // translates CSS into CommonJS 把css打包进js
                }, {
                    loader: "less-loader" // compiles Less to CSS  //把less打包成css
                }]
            },
            {

                test: /\.(gif|png|jpg|jpeg)$/i,   //识别图片文件
                type: "asset"   //打包图片
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,  //识别字体文件
                type: "asset/resource",        //打包字体
                generator: {
                    filename: "fonst/[name].[hash:6][ext]"  //把字体保存到
                }
            },
            {
                test: /\.js$/,           //识别js文件
                exclude: /(node_modules|bower_components)/, //排除在外的文件
                use: {
                    loader: 'babel-loader',    //打包js文件 
                    options: {
                        presets: ['@babel/preset-env']  //按照这个预设规则降级 js文件
                    }
                }
            }

        ]
    },

    plugins: [new HtmlWebpackPlugin({
        template: "./public/index.html"
    }), new MiniCss({
        filename: "css/[name].css"
    })],
    devServer: {
        port: 3000
    },



};