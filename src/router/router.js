import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)//Vue.propertype.$route  Vue.propertype.$router

//导入组件
import home from '../components/home/home.vue'
import category from '../components/category/category.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import mine from '../components/mine/mine.vue'
import newslist from '../components/news/newslist.vue'
import newsinfo from '../components/news/newsinfo.vue'
import photolist from '../components/photo/photolist.vue'
import photoinfo from '../components/photo/photoinfo.vue'
import goodslist from '../components/goods/goodslist.vue'
import goodsinfo from '../components/goods/goodsinfo.vue'
import pictureAndText from '../components/goods/pictureAndText.vue'
import goodscomment from '../components/goods/goodscomment.vue'

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

//导出路由对象
export default router
