var path = require('path')

var webpack = require('webpack')

//打包之前，删除dist目录
var CleanWebpackPlugin = require('clean-webpack-plugin')

//导入根据模版文件在内存中生成index.html的插件
var HtmlWebpackPlugin = require('html-webpack-plugin')

//抽离第三方样式
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry:{
       //属性名称是以后生成的js的名称，值是第三包的名称
       mintUi:['mint-ui'],
       moment:['moment'],
       quanjitong:['vue','vue-router','vuex'],
       vueResource:['vue-resource'],
       vuePreview:['vue-preview'],
       bundle:'./src/main.js' //不要忘记我们自己写的那些代码了
    }, //打包的入口文件
    output:{ //输出文件
        path:path.join(__dirname,'dist'),
        filename:'js/[name].js'
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
                // use: [
                //     { 
                //         loader: "style-loader"
                //     },
                //     { 
                //         loader: "css-loader"
                //     }
                // ]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|gif)$/,//参考:https://doc.webpack-china.org/loaders/url-loader
                use: [
                    {
                        /*
                            limit：
                                表示的是一个阀值,如果当前我们资源中的图片大小
                                4kb就从bundle.js中剥离出来，如果小于4kb打包进bundle.js,4kb只是我这设置的一个值,实际开发过程中要根据业务来
    
                            name:抽离出来的图片，放在哪个文件夹下，用什么文件名称命名
                                [name]代表你原始的文件名称
                                [hash:5] 避免图片换了之后，浏览器还加在原先的图片,解决缓存的问题
                                [ext] 图片本身的拓展名
                        */
                        loader: 'url-loader?limit=4000&name=images/[name]-[hash:5].[ext]'
                    }
                ]
            },
            {
                test: /\.(ttf)$/,//参考:https://doc.webpack-china.org/loaders/url-loader
                use: [
                    {
                        /*
                            limit：
                                表示的是一个阀值,如果当前我们资源中的图片大小
                                4kb就从bundle.js中剥离出来，如果小于4kb打包进bundle.js,4kb只是我这设置的一个值,实际开发过程中要根据业务来
    
                            name:抽离出来的图片，放在哪个文件夹下，用什么文件名称命名
                                [name]代表你原始的文件名称
                                [hash:5] 避免图片换了之后，浏览器还加在原先的图片,解决缓存的问题
                                [ext] 图片本身的拓展名
                        */
                        loader: 'url-loader?limit=4000&name=fonts/[name]-[hash:5].[ext]'
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
        //打包之前，删除dist目录，写在其它插件前面
        new CleanWebpackPlugin('dist'),

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
        }),
        //这个地方有个小注意点，不要把自己业务逻辑bundle放在这里，
        //这里只放第三方
        /**
         * name:我们刚刚在entry打包入口对象里面的属性名称
         * minChunks:公共模块被使用的最小次数。比如配置为3，也就是同一个模块只有被3个以外的页面同时引用时才会被提取出来作为common chunks。
         */
        new webpack.optimize.CommonsChunkPlugin({name:["vuePreview","moment","vueResource","quanjiatong","mintUi"],minChunks: Infinity}),

        //抽离到css目录下面的styles.css中
        new ExtractTextPlugin("css/styles.css")
    ]
}