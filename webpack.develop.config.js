var path = require('path')

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
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./template.html',//以谁为模版
            filename: 'index.html'//最终在内存里面生成的文件名称
        })
    ]
}