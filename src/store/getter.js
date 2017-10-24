export default{
    getGoodsTotalCount(state){
        //1.获取列表
        const goodsList = state.goodsList
        
        let totalCount  = 0
        goodsList.forEach(item=>{
            totalCount+=item.count
        })

        return totalCount
    },
    getGoodsList(state){
        return state.goodsList
    }
}