var path = require('path')

var webpack = require('webpack')

//导入根据模版文件在内存中生成index.html的插件
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/main.js', //打包的入口文件
    output:{ //输出文件
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[//2.x的写法
            {
                test: /\.vue$/,
                use: [
                    { 
                        loader: "vue-loader" //参考https://vue-loader.vuejs.org/zh-cn/
                    }
                ]
            },
            {
                test: /\.css$/,//参考:https://doc.webpack-china.org/loaders/style-loader
                use: [
                    { 
                        loader: "style-loader"
                    },
                    { 
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(ttf|png|svg|gif)$/,//参考:https://doc.webpack-china.org/loaders/url-loader
                use: [
                    { 
                        loader: "url-loader"
                    }
                ]
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, //排除第三方
                loader: "babel-loader" 
            },
            {
                test: /vue-preview.src.*?js$/,//vue-preview要额外处理一下
                loader: 'babel-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./template.html',//以谁为模版
            filename: 'index.html',//最终在内存里面生成的文件名称
            minify:{
                collapseWhitespace:true, //去除空格
                minifyCSS:true,//压缩css
                minifyJS:true,//压缩js
                removeComments:true//去掉注释
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: '"production"' //设置为生产环境
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false//干掉警告
            },
            comments: false //去掉版权信息等注释
        })
    ]
}