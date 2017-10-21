<template>
   <div>
       <div class="titleStyle">
           <h3>{{pictureAndTextInfo.title}}</h3>
       </div>

       <div class="contentStyle">
           <p v-html="pictureAndTextInfo.content"></p>
       </div>
   </div>
</template>
   
<style scoped>
   .titleStyle,.contentStyle{
       padding: 8px;
   }

   .titleStyle{
       border-bottom: 1px solid rgba(92,92,92,0.3);
       padding-bottom: 10px;
   }

   h3{
       font-size: 16px;
       color:#0094ff;
   }

   p{
       font-size: 14px;
       color: gray;
   }
</style>
   
<script>
   import common from '../../common/common.js'
   
   export default {
       data() {
           return {
               pictureAndTextInfo : {}
           }
       },
       created() {
           this.getPictureAndTextInfoData()
       },
       methods: {
           //获取图文信息的数据
           getPictureAndTextInfoData(){
               const url = `${common.apihost}api/goods/getdesc/${this.$route.params.goodsId}`

               this.$http.get(url).then(response=>{
                   this.pictureAndTextInfo = response.body.message[0]
               })
           }
       }
   }
</script>