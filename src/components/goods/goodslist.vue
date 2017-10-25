<template>
   <div class="mui-content" style="background-color:#fff">
        <ul class="mui-table-view mui-grid-view">
            <li v-for="item in goodsList" :key="item.id" class="mui-table-view-cell mui-media mui-col-xs-6">
                <div class="goodsContentStyle">
                    <router-link :to="'/goods/goodsinfo/'+item.id">
                        <img class="mui-media-object" :src="item.img_url">
                        <div class="mui-media-body">
                            <!-- 标题 -->
                            <p class="titleStyle">{{item.title}}</p>
                            <!-- 价格 -->
                            <p class="priceStyle">
                                <span>{{item.sell_price}}</span>&nbsp;&nbsp;
                                <s>{{item.market_price}}</s>
                            </p>
                            <!-- 提示信息 -->
                            <p class="tipStyle">
                                <span>热卖中</span>
                                <span>剩余{{item.stock_quantity}}件</span>
                            </p>
                        </div>
                    </router-link>
                </div>
            </li>
        </ul>    
    </div>
</template>
   
<style scoped>
   .mui-content ul{
       margin: 0px;
       padding: 0px;
   }

   .mui-table-view.mui-grid-view .mui-table-view-cell{
       margin: 0px;
       padding: 5px 6px;
   }

   .mui-content .mui-grid-view .goodsContentStyle{
       border: 1px solid rgba(92,92,92,0.3);
       border-radius: 5px;
       box-shadow: 0px 0px 5px rgba(92,92,92,0.3);
   }

   img{
       padding: 5px;
   }

   .mui-content .mui-grid-view .goodsContentStyle .mui-media-body{
       height: 100px;
       padding: 5px;
   }

   .titleStyle{
       color: black;
       font-size: 12px;
       text-align: left;
       overflow:hidden; 
       text-overflow:ellipsis;
       display:-webkit-box;
       -webkit-box-orient:vertical;
       -webkit-line-clamp:2;
   }

   .priceStyle{
       height: 35px;
       background-color: #f0f0f0;
       text-align: left;
       line-height: 35px;
   }

   .priceStyle span{
       color: red;
       font-size: 16px;
   }

   .tipStyle{
       height: 25px;
       background-color: #f0f0f0;
       display: flex;
       justify-content: space-between;
       align-items: center;
   }
</style>
   
<script>
   import common from '../../common/common.js'
   
   export default {
       data() {
           return {
               goodsList:[]
           }
       },
       created() {
           this.getGoodsListData()
       },
       methods: {
           getGoodsListData(){
               const url = `${common.apihost}api/getgoods`

               this.$http.get(url).then(response=>{
                   this.goodsList = response.body.message
               })
              /** 
                 this.$axios.get(url).then(response=>{
                     this.goodsList = response.data.message
                })
              */
           }
       }
   }
</script>