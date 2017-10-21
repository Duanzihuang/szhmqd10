<template>
   <div>
       <!-- 1.0 轮播子组件 -->
       <div class="lunboStyle">
           <subswipe :lunbo_url="'api/getthumimages/'+this.$route.params.goodsId" :lunbo_time="lunboTime"></subswipe>
       </div>
   </div>
</template>
   
<style scoped>
   
</style>
   
<script>
   import common from '../../common/common.js'

   //导入轮播子组件
   import subswipe from '../subcomponents/subswipe.vue'
   
   export default {
       data() {
           return {
               lunboTime:1000
           }
       },
       created() {
           
       },
       methods: {
           
       },
       components:{
           subswipe
       }
   }
</script>