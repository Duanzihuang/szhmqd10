<template>
   <div>
       <!-- 1.0 标题部分 -->
       <div class="titleStyle">
         <h5>{{photoInfo.title}}</h5>
         <p>{{photoInfo.add_time | dateFmt('YYYY-MM-DD')}}&nbsp;&nbsp;{{photoInfo.click}}次浏览</p>
       </div>

       <!-- 2.0 缩略图部分 -->

       <!-- 3.0 内容部分 -->
       <div class="contentStyle">
         <p v-html="photoInfo.content"></p>
       </div>

       <!-- 4.0 评论部分 -->
       <subcomment :commentId="this.$route.params.photoId"></subcomment>
   </div>
</template>
   
<style scoped>
    h5{
      color:#0094ff;
      font-size: 16px;
    }

   .titleStyle,.contentStyle{
     padding: 8px;
   }
</style>
   
<script>
   import common from '../../common/common.js'

   //导入子组件
   import subcomment from '../subcomponents/subcomment.vue'
   
   export default {
       data() {
           return {
             photoInfo:{}
           }
       },
       created() {
           this.getPhotoInfoData()
       },
       methods: {
           //获取图片详情数据
           getPhotoInfoData(){
              const url = common.apihost+"api/getimageInfo/"+this.$route.params.photoId

              this.$http.get(url).then(response=>{
                this.photoInfo = response.body.message[0]
              })
           }
       },
       components:{//注册
         subcomment
       }
   }
</script>