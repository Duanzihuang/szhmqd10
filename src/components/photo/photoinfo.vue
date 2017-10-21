<template>
   <div>
       <!-- 1.0 标题部分 -->
       <div class="titleStyle">
         <h5>{{photoInfo.title}}</h5>
         <p>{{photoInfo.add_time | dateFmt('YYYY-MM-DD')}}&nbsp;&nbsp;{{photoInfo.click}}次浏览</p>
       </div>

       <!-- 2.0 缩略图部分 -->
       <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li v-for="(item,index) in thumbImages" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		                  <img @click="$preview.open(index, thumbImages)" class="preview-img" height="100" :src="item.src">
                </li>
		        </ul> 
		   </div>

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

   .mui-grid-view.mui-grid-9 .mui-table-view-cell{
     border:0px;
   }
</style>
   
<script>
   import common from '../../common/common.js'

   //导入子组件
   import subcomment from '../subcomponents/subcomment.vue'
   
   export default {
       data() {
           return {
             photoInfo:{},
             thumbImages:[]
           }
       },
       created() {
           this.getPhotoInfoData()
           this.getThumbImagesData()
       },
       methods: {
           //获取图片详情数据
           getPhotoInfoData(){
              const url = common.apihost+"api/getimageInfo/"+this.$route.params.photoId

              this.$http.get(url).then(response=>{
                this.photoInfo = response.body.message[0]
              })
           },
           //获取图片缩略图的数据
           getThumbImagesData(){
             //const url = common.apihost+"api/getthumimages/"+this.$route.params.photoId
             const url = `${common.apihost}api/getthumimages/${this.$route.params.photoId}`
             
             this.$http.get(url).then(response=>{
               response.body.message.forEach(item=>{
                 item.w = 400
                 item.h = 400
               })
               console.log(response.body.message)
               this.thumbImages = response.body.message
             },err=>{
               console.log(err)
             })
           }
       },
       components:{//注册
         subcomment
       }
   }
</script>