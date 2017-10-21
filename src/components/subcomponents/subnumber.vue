<template>
   <div style="margin-bottom:8px;">
       <div @click="subtract" class="left">-</div>
       <div class="center">{{count}}</div>
       <div @click="add" class="right">+</div>
   </div>
</template>
   
<style scoped>
   .left,.center,.right{
       border: 1px solid rgba(92,92,92,0.3);
       display: inline-block;
       width: 35px;
       height: 30px;
       text-align: center;
       line-height: 30px;
   }

   .center{
       width:40px;
    }
</style>
   
<script>
   import common from '../../common/common.js'
   
   export default {
       data() {
           return {
               count:1
           }
       },
       methods: {
           subtract(){
               if(this.count<=1){
                   return
               }

               this.count--

               this.notify()
           },
           add(){
               this.count++

               this.notify()
           },
           notify(){
               //发送方，触发事件传值
               this.$emit('changeNumber',this.count)
           }
       }
   }
</script>