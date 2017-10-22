<template>
   <div>
       <!-- 1.0 轮播子组件 -->
       <div class="lunboStyle">
           <subswipe :lunbo_url="'api/getthumimages/'+this.$route.params.goodsId" :lunbo_time="lunboTime"></subswipe>
       </div>

       <!-- 2.0 商品信息 -->
       <div class="goodsInfoStyle">
           <h5>{{goodsInfo.title}}</h5>
           <p>市场价:<del>￥{{goodsInfo.market_price}}</del>&nbsp;&nbsp;销售价:￥<span>{{goodsInfo.market_price}}</span></p>
           <subnumber @changeNumber="getChangeNumber"></subnumber>
           <mt-button type="primary">立即购买</mt-button>
           <mt-button @click="addToShopCart" type="danger">加入购物车</mt-button>
       </div>

       <!-- 3.0 商品参数 -->
       <div class="goodsParamsStyle">
           <h6>商品参数</h6>
           <ul>
               <li>商品货号:{{goodsInfo.goods_no}}</li>
               <li>库存情况:剩余{{goodsInfo.stock_quantity}}件</li>
               <li>上架时间:{{goodsInfo.add_time | dateFmt}}</li>
           </ul>
       </div>

       <!-- 4.0 图文介绍和商品评论 -->
       <div class="pictureAndTextStyle">
           <mt-button type="primary" @click="goToPictureAndText" size="large" plain>图文介绍</mt-button>
           <mt-button type="danger" @click="goToGoodsComment" class="goodsCommentStyle" size="large" plain>商品评论</mt-button>
       </div>
   </div>
</template>
   
<style scoped>
   .lunboStyle,.goodsInfoStyle,.goodsParamsStyle,.pictureAndTextStyle{
       margin: 10px;
       border:1px solid rgba(92,92,92,0.3);
       border-radius: 8px;
       padding: 10px;
   }

   h5{
       font-size: 16px;
       color:#0094ff;
       border-bottom: 1px solid rgba(92,92,92,0.3);
       padding-bottom: 10px;
   }

   .goodsInfoStyle p span{
       color: red;
       font-size: 16px;
   }

    h6{
        font-size: 14px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92,92,92,0.3);
    }

    ul{
        margin: 0px;
        padding: 0px;
    }

    li{
        list-style: none;
        font-size: 14px;
    }

    .goodsCommentStyle{
        margin-top: 15px;
    }
</style>
   
<script>
   import common from '../../common/common.js'

   //导入轮播子组件
   import subswipe from '../subcomponents/subswipe.vue'
   import subnumber from '../subcomponents/subnumber.vue'

   //导入公共的bus
//    import bus from '../../common/commonvue.js'
   
   export default {
       data() {
           return {
               lunboTime:1000,//轮播图的时间
               goodsInfo : {},
               goodsCount:1
           }
       },
       created() {
           this.getGoodsInfoData()
       },
       methods: {
           //获取商品详情数据
           getGoodsInfoData(){
               const url = `${common.apihost}api/goods/getinfo/${this.$route.params.goodsId}`

               this.$http.get(url).then(response=>{
                   this.goodsInfo = response.body.message[0]
               })
           },
           //跳转到图文详情中去
           goToPictureAndText(){
               //通过编程式导航跳转到pictureAndText.vue中去 https://router.vuejs.org/zh-cn/essentials/navigation.html
               //如果需要传递参数，最好不要使用命名路由
               this.$router.push({ name: 'pictureAndText', params: { goodsId: this.$route.params.goodsId }})
           },
           //跳转到商品评论组件中去 ?xxx=xxx req.query.xxx
           goToGoodsComment(){
               this.$router.push({ path: '/goods/goodscomment', query: { goodsId: this.$route.params.goodsId }})
           },
           //子组件触发了自定义事件之后，父组件中要执行的函数
           getChangeNumber(count){
               this.goodsCount = count
           },
           //加入购物车
           addToShopCart(){
               //1.拿到子组件中传递过来的值
               

               //2.使用公共的bus(公共的Vue实例)，触发事件，传递值出去
               //bus.$emit('changeBadge', this.goodsCount)


               //3 使用Vuex的方式，将我们选中的商品和数量保存到仓库中
               const goodsObj = {goodsId:this.$route.params.goodsId,count:this.goodsCount}

               //同步保存
               this.$store.commit('saveGoods',goodsObj)

               //异步保存
               // this.$store.dispatch('asyncSaveGoods',goodsObj)
           }
       },
       components:{
           subswipe,
           subnumber
       }
   }
</script>