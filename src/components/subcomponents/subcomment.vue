<template>
  <div>
      我是评论子组件...{{this.commentId}}
  </div>
</template>

<script>
  export default{
    created(){
      console.log(this.commentId)
    },
    props:['commentId'] //父组件到时候传递值就根据该名称
  }
</script>
