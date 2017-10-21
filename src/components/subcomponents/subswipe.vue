<template>
   <div>
       <mt-swipe :auto="lunbo_time">
            <mt-swipe-item v-for="(item,index) in lunboArray" :key="index">
                <a :href="item.url">
                    <img :src="item.src">
                </a>
            </mt-swipe-item>
       </mt-swipe>
   </div>
</template>
   
<style scoped>
    /* 1.0 轮播图样式 */
    .mint-swipe {
        height: 250px;
    }

    img {
        width: 100%;
        height: 250px;
    }
</style>
   
<script>
   import common from '../../common/common.js'
   
   export default {
       data() {
           return {
               lunboArray: [] //数据的初始化
           }
       },
       props:['lunbo_url','lunbo_time'],
       created() {
           this.getLunboData()
       },
       methods: {
            //获取轮播数据的方法
            getLunboData: function() {
                const url = `${common.apihost}${this.lunbo_url}`

                //发送网络请求
                this.$http.get(url).then(response => {
                    response.body.message.forEach(item=>{
                        if(item.img){
                            item.src = item.img
                        }
                    })
                    this.lunboArray = response.body.message
                }, err => {
                    console.log(err)
                })
            }
       }
   }
</script>