<template>
  <div>
      <!-- 1.0 商品的列表 -->
      <div class="goodsListStyle">
        <div v-for="(item,index) in goodsList" :key="item.id" class="itemStyle">
          <!-- 开关 -->
          <mt-switch @change="statisticsTotalCountAndTotalPrice" v-model="item.isSelected" class="switchStyle"></mt-switch>
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
          <mt-button :disabled="!item.isSelected" class="deleteStyle" type="danger" size="small" @click="deleteItem(index)">删 除</mt-button>
        </div>
      </div>

      <!-- 2.0 提示信息 -->
      <div class="statisticsInfoStyle">
        <div class="totalPriceAndCountStyle">
          <h2>
            总计(不含运费)
          </h2>
          <p>
            已经勾选商品&nbsp;<span>{{totalCount}}</span>&nbsp;件,总价&nbsp;<span>{{totalPrice}}</span>&nbsp;
          </p>
        </div>
        <div>
          <mt-button class="payStyle" type="danger" size="normal">去结算</mt-button>
        </div>
      </div>
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

  /** 统计信息相关的样式 */
  .statisticsInfoStyle{
    height: 100px;
    background-color: rgba(92,92,92,0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2{
    font-size: 18px;
  }

  .totalPriceAndCountStyle{
    margin-left: 8px;
  }

  .payStyle{
    margin-right: 8px;
  }

  .totalPriceAndCountStyle p span{
    color: red;
    font-size: 16px;
  }

</style>


<script>
  //导入common.js
  import common from '../../common/common.js'

  import { MessageBox } from 'mint-ui'

  export default{
    data(){
      return {
        goodsList : [],
        totalCount:0,
        totalPrice:0
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
          
          //赋值给我们当前的数组
          this.goodsList = response.body.message

          //刚开始获取到服务器的数据之后，就要统计一次
          this.statisticsTotalCountAndTotalPrice()
        })
      },
      //统计我们现在选中商品的数量和价格
      statisticsTotalCountAndTotalPrice(){
        let tempTotalCount = 0
        let tempTotalPrice = 0

        this.goodsList.forEach(item=>{
          if(item.isSelected){
            tempTotalCount+=item.count
            tempTotalPrice+=item.sell_price * item.count
          }
        })

        this.totalCount = tempTotalCount
        this.totalPrice = tempTotalPrice
      },
      deleteItem(index){
        MessageBox.confirm('确定删除该条数据吗?').then(action => {
          //1.0 先删除Vuex中对应id的数据
          this.$store.commit('deleteGoodsById',this.goodsList[index].id)

          //2.0 删除点击索引的数据
          this.goodsList.splice(index,1)

          //3.0 重新统计总数量和总价格
          this.statisticsTotalCountAndTotalPrice()
        },cancel=>{
          console.log(cancel)
        });

        
      }
    }
  }
</script>