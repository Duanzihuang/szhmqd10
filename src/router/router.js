import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)//Vue.propertype.$route  Vue.propertype.$router

//导入组件
// import home from '../components/home/home.vue'
// import category from '../components/category/category.vue'
// import shopcart from '../components/shopcart/shopcart.vue'
// import mine from '../components/mine/mine.vue'
// import newslist from '../components/news/newslist.vue'
// import newsinfo from '../components/news/newsinfo.vue'
// import photolist from '../components/photo/photolist.vue'
// import photoinfo from '../components/photo/photoinfo.vue'
// import goodslist from '../components/goods/goodslist.vue'
// import goodsinfo from '../components/goods/goodsinfo.vue'
// import pictureAndText from '../components/goods/pictureAndText.vue'
// import goodscomment from '../components/goods/goodscomment.vue'

const home = () => import(/* webpackChunkName: "first level router" */ '../components/home/home.vue')
const category = () => import(/* webpackChunkName: "first level router" */ '../components/category/category.vue')
const shopcart = () => import(/* webpackChunkName: "first level router" */ '../components/shopcart/shopcart.vue')
const mine = () => import(/* webpackChunkName: "first level router" */ '../components/mine/mine.vue')
const newslist = () => import(/* webpackChunkName: "second level router" */ '../components/news/newslist.vue')
const newsinfo = () => import(/* webpackChunkName: "third level router" */ '../components/news/newsinfo.vue')
const photolist = () => import(/* webpackChunkName: "second level router" */ '../components/photo/photolist.vue')
const photoinfo = () => import(/* webpackChunkName: "third level router" */ '../components/photo/photoinfo.vue')
const goodslist = () => import(/* webpackChunkName: "second level router" */ '../components/goods/goodslist.vue')
const goodsinfo = () => import(/* webpackChunkName: "third level router" */ '../components/goods/goodsinfo.vue')
const pictureAndText = () => import(/* webpackChunkName: "fourth level router" */ '../components/goods/pictureAndText.vue')
const goodscomment = () => import(/* webpackChunkName: "fourth level router" */ '../components/goods/goodscomment.vue')

//参考:https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
// const home = () => import('../components/home/home.vue')
// const category = () => import('../components/category/category.vue')
// const shopcart = () => import('../components/shopcart/shopcart.vue')
// const mine = () => import('../components/mine/mine.vue')
// const newslist = () => import('../components/news/newslist.vue')
// const newsinfo = () => import('../components/news/newsinfo.vue')
// const photolist = () => import('../components/photo/photolist.vue')
// const photoinfo = () => import('../components/photo/photoinfo.vue')
// const goodslist = () => import('../components/goods/goodslist.vue')
// const goodsinfo = () => import('../components/goods/goodsinfo.vue')
// const pictureAndText = () => import('../components/goods/pictureAndText.vue')
// const goodscomment = () => import('../components/goods/goodscomment.vue')

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
