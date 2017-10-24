<template>
  <div>
      <!-- 1.0 商品的列表 -->
      <div class="goodsListStyle">
        <div v-for="item in goodsList" :key="item.id" class="itemStyle">
          <!-- 开关 -->
          <mt-switch v-model="item.isSelected" class="switchStyle"></mt-switch>
          <!-- 缩略图 -->
          <div class="thumbImageStyle">
            <img :src="item.thumb_path" alt="">
          </div>
          <!-- 商品信息 -->
          <div class="goodsInfoStyle">
            <p class="titleStyle">
              {{item.title}}
            </p>
            <p>
              <span class="priceStyle">{{item.sell_price}}</span>&nbsp;&nbsp;
              <span>商品数量{{item.count}}</span>
            </p>
          </div>
          <!-- 删除按钮 -->
          <mt-button class="deleteStyle" type="danger" size="small">删 除</mt-button>
        </div>
      </div>

      <!-- 2.0 提示信息 -->
  </div>
</template>

<style scoped>
  .itemStyle{
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(92,92,92,0.3);
  }

  .switchStyle{
    margin-left: 8px;
  }

  .thumbImageStyle{
    width: 65px;
    height: 65px;
    border: 1px solid rgba(92,92,92,0.3);
    border-radius: 5px;
    padding: 10px;
    margin-left: 5px;
  }

  .thumbImageStyle img{
    width: 100%;
    height: 100%;
  }

  .deleteStyle{
    margin-right: 10px;
  }

  .goodsInfoStyle{
    flex: 1;
    margin-left: 5px;
  }

  .titleStyle{
    font-size: 16px;
    color:#0094ff;
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }

  .priceStyle{
    font-size: 14px;
    color: red;
  }
</style>


<script>
  //导入common.js
  import common from '../../common/common.js'

  export default{
    data(){
      return {
        goodsList : []
      }
    },
    created(){
      this.getShopCartListData()
    },
    methods:{
      //获取购物车中的原始数据，发送网络请求，再呈现给用户
      getShopCartListData(){
        //1.获取原始的购物车中的数据
        /**
         * originalGoodsList中的数据，长成这个样子
         * [
         *  {goodsId:"87",count:2},
         *  {goodsId:"88",count:3},
         *  {goodsId:"87",count:3}
         * ]
         */
        const originalGoodsList = this.$store.getters.getGoodsList
        if(originalGoodsList==null || originalGoodsList.length<=0){
          console.log("购物车中还没有数据")
          return
        }
        
        //2.把我们originalGoodsList变成 var tempObj = {"87":5,"88":3}
        const tempObj = {}

        originalGoodsList.forEach(item=>{
          if(tempObj[item.goodsId]){ //如果原先tempObj中有该id
            tempObj[item.goodsId]+=item.count
          }else{
            tempObj[item.goodsId] = item.count
          }
        })
        
        //3.把tempObj中的 "87","88" 放入到一个临时的数组中去
        const tempIdArray = []
        for(var key in tempObj){
          tempIdArray.push(key)
        }

        //4.把我们数组中的id变成用`,`分割的字符串
        const idsString = tempIdArray.join(',')

        //5.根据idsString `87,88` 发送网路请求
        const url = `${common.apihost}api/goods/getshopcarlist/${idsString}`
        
        this.$http.get(url).then(response=>{
          response.body.message.forEach(item=>{
            item.count = tempObj[item.id]
            item.isSelected = true
          })

          this.goodsList = response.body.message
        })
        
      }
    }
  }
</script>