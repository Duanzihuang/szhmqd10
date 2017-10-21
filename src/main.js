/**
 * 打包的入口文件，把需要的组件或是第三方在这里导入进来
 */
//导入第三方包
/** Vue是变量名  vue是包名 */
import Vue from 'vue'
import Mint from 'mint-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-preview'

//集成中间件
Vue.use(Mint)
Vue.use(VueRouter)//Vue.propertype.$route  Vue.propertype.$router
Vue.use(VueResource)//Vue.propertype.$http
Vue.use(VuePreview)

//导入样式
//todo 生产阶段要是用style.min.css
//在这里可以不用写node_modules的路径，它自己回去找
import 'mint-ui/lib/style.css'
import './statics/mui/css/mui.css'
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


//导入组件
import home from './components/home/home.vue'
import category from './components/category/category.vue'
import shopcart from './components/shopcart/shopcart.vue'
import mine from './components/mine/mine.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photo/photolist.vue'
import photoinfo from './components/photo/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import pictureAndText from './components/goods/pictureAndText.vue'
import goodscomment from './components/goods/goodscomment.vue'

//创建路由对象，设置路由规则
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/category',component:category},
        {path:'/shopcart',component:shopcart},
        {path:'/mine',component:mine},
        {path:'/news/newslist',component:newslist},
        {path:'/news/newsinfo/:newsId',component:newsinfo},
        {path:'/photo/photolist',component:photolist},
        {path:'/photo/photoinfo/:photoId',component:photoinfo},
        {path:'/goods/goodslist',component:goodslist},
        {path:'/goods/goodsinfo/:goodsId',component:goodsinfo},
        {name:'pictureAndText',path:'/pictureAndText',component:pictureAndText},
        {path:'/goods/goodscomment',component:goodscomment}

    ]
})

//创建根实例
new Vue({
    el:'#app',
    // render:function(createElement){
    //     return createElement(App)
    // }
    router,
    render:h=>h(App)
})
