<template>
   <div>
       <!-- 1.0 图片分类 -->
       <div class="imageCategoryStyle">
           <ul ref="ulRef">
               <li @click="getImageListByCategoryId(0)">全部</li>
               <li  @click="getImageListByCategoryId(item.id)" v-for="item in imageCategoryList" :key="item.id">{{item.title}}</li>
           </ul>
       </div>

       <!-- 2.0 图片列表 -->
       <div class="imageListStyle">
           <ul>
               <li v-for="item in imageList" :key="item.id">
                   <router-link :to="'/photo/photoinfo/'+item.id">
                    <img :src="item.img_url" alt="">
                    <p>
                        <span>{{item.title}}</span><br/>
                        {{item.zhaiyao}}
                    </p>
                   </router-link>
               </li>
           </ul>
       </div>
   </div>
</template>
   
<style scoped>
   /* 1.0 设置图片分类的样式 */
    .imageCategoryStyle{
       overflow-x: auto;
    }

   .imageCategoryStyle ul{
       margin: 3px 0px;
       padding: 0px 0px 15px 0px;
       white-space: nowrap;
   }

   .imageCategoryStyle ul li{
       list-style: none;
       display: inline-block;
       margin:0px 3px;
       color: #0094ff;
   }

   /* 2.0 设置我们的图片列表样式 */
   .imageListStyle ul{
       margin: 3px 0px;
       padding: 0px;
   }

   .imageListStyle ul li{
       padding: 2px;
       position: relative;
   }

   img{
       width:99%;
       height: 400px;
   }

   .imageListStyle p{
       position: absolute;
       left: 3px;
       bottom: 0px;
       width:97%;
       background-color: rgba(0,0,0,0.2);
       color: white;
   }

   .imageListStyle p span{
       font-size: 16px;
       font-weight: 900;
   }

</style>
   
<script>
   import common from '../../common/common.js'

   import { Indicator } from 'mint-ui'
   
   export default {
       data() {
           return {
               imageCategoryList:[],
               imageList:[]
           }
       },
       created() {
           this.getImageCatetoryData()
           this.getImageListByCategoryId(0)
       },
       destroyed(){
           //console.log("111111111111111111111")
           Indicator.close()
       },
       methods: {
           //获取图片列表数据
           getImageCatetoryData(){
               const url = common.apihost+"api/getimgcategory"

               this.$http.get(url).then(response=>{
                   this.imageCategoryList = response.body.message
                   
                    //const ulWidth = (response.body.message.length+1)*72
                    //this.$refs.ulRef.style.width = ulWidth+'px';
               })
           },
           //根据分类的id获取下面对应的图片数组
           getImageListByCategoryId(categoryId){
               Indicator.open({
                    text: '拼命加载中...',
                    spinnerType: 'triple-bounce'
               })

               const url = common.apihost+"api/getimages/"+categoryId

               this.$http.get(url).then(response=>{
                   Indicator.close()
                   this.imageList = response.body.message
               },err=>{
                   Indicator.close()
               })
           }
       }
   }
</script>