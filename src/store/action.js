export default {
    asyncSaveGoods(context,goods) { //context 相当于$store
        context.commit('saveGoods',goods) //调用同步保存商品的方法
    }
}