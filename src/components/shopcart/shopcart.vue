<template>
  <div>
      购物车
  </div>
</template>

<script>
  export default{
    created(){
      const goodsList = this.$store.getters.getGoosList

      console.log(goodsList)
    }
  }
</script>