export default {//同步的保存和更新state中的数据
    saveGoods (state,goodsObj) { //goods ===> {goodsId:"87",count:3}
        // 将传入的商品对象，保存到state的goodsList数组中
        state.goodsList.push(goodsObj)

        console.log(state.goodsList)
    },
    deleteGoodsById(state,goodsId){
        //[{goodsId:"87",count:2},{goodsId:"88",count:3},{goodsId:"87",count:3}]
        //for循环删除,边遍历，便删除，一般是从后往前删除
        // for(var i=state.goodsList.length-1 ;i>=0;i--){
        //     const goods = state.goodsList[i]
        //     if(goods.goodsId==goodsId){
        //         state.goodsList.splice(i,1)
        //     }
        // }

        //顾虑 filter [{goodsId:"88",count:3}]
        state.goodsList = state.goodsList.filter(item=>{
            return item.goodsId!=goodsId
        })
    }
}