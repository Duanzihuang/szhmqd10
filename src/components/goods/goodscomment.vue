<template>
   <subcomment :commentId="this.$route.query.goodsId"></subcomment>
</template>
   
<style scoped>
   
</style>
   
<script>
   import common from '../../common/common.js'

   //导入评论子组件
   import subcomment from '../subcomponents/subcomment.vue'
   
   export default {
       components:{
           subcomment
       }
   }
</script>