/**
 * 打包的入口文件，把需要的组件或是第三方在这里导入进来
 */
//导入第三方包
/** Vue是变量名  vue是包名 */
import Vue from 'vue'
import Mint from 'mint-ui'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-preview'
// import axios from 'axios'

//集成中间件
Vue.use(Mint)
Vue.use(VueResource)//Vue.propertype.$http
Vue.use(VuePreview)
//原型上不要随便加东西，加一些每个实例都需要用到的
// Vue.prototype.$axios = axios

//导入样式
//todo 生产阶段要是用style.min.css
//在这里可以不用写node_modules的路径，它自己回去找
// import 'mint-ui/lib/style.css'
import 'mint-ui/lib/style.min.css'
// import './statics/mui/css/mui.css'
import './statics/mui/css/mui.min.css'
import './statics/css/site.css'

//全局的过滤器
Vue.filter('dateFmt',(input,dateFmtString)=>{
    const lastFmtString = dateFmtString || 'YYYY-MM-DD HH:mm:ss'

    /**
     * 参数1：要格式化的原始时间
     * 参数2：格式化的字符串
     */
    return moment(input).format(lastFmtString)
})

//导入App.vue
import App from './App.vue'//var App = require('./App.vue')

//导入路由模块
import router from './router/router.js'
import store from './store/index.js'

//创建根实例
new Vue({
    el:'#app',
    // render:function(createElement){
    //     return createElement(App)
    // }
    router,
    store,
    render:h=>h(App)
})
