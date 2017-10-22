<template>
  <div>
    <!-- 1.0 头部 -->
    <mt-header fixed title="Vue_CMS"></mt-header>

    <div v-show="isShowBack" @click="goBack" class="backStyle">&lt;返回</div>

    <!-- 2.0 中间内容 路由 -->
    <router-view class="centerContent"></router-view>

    <!-- 3.0 底部TabBar -->
    <mt-tabbar :class="isHideTabBar ? 'hideTabBarStyle' : '' " fixed>
      <mt-tab-item>
        <router-link to="/home">
          <img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/category">
          <img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/shopcart">
          <img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
          <span class="badgeStyle" v-show="count!=0">{{count}}</span>
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/mine">
          <img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<!-- scoped代表样式私有，只能在当前组件中使用 -->
<style scoped>
  .mint-tabbar>.mint-tab-item.is-selected {
    background-color: #FAFAFA;
  }

  img {
    width: 42px;
    height: 35px;
  }

  .centerContent {
    margin-top: 40px;
  }

  /* 返回按钮样式 */
  .backStyle{
    position: fixed;
    left: 8px;
    top:10px;
    font-size: 14px;
    font-weight: 700;
    color: white;
    z-index: 2;
  }

  /* 隐藏底部TabBar */
  .hideTabBarStyle{
    display: none;
  }
  /**
  * 购物车徽标的样式
  */
  .badgeStyle{
    font-size: 11px;
    line-height: 1.3;  
    position: absolute;
    top: 7px;
    left: 63%;
    text-align: center;
    padding: 1px 5px; 
    color: #fff;
    border-radius: 11px; 
    background: red;
  }
</style>

<script>
  //导入公共的bus
  // import bus from './common/commonvue.js'

  export default{
    data(){
      return {
        isShowBack:false,
        isHideTabBar:false,
        count:0
      }
    },
    created(){
      this.isShowOrHide(this.$route.path)
      /**
       * 如何改变函数的this指向
       * 
       * es3
       *    在外面声明一个变量 const _this = this
       *    apply、call 会改变里面this的指向，立即执行函数
       *    bind  会改变里面this的指向 调用这个函数的时候才会执行
       * 
       * es6箭头函数
       * 
       */
      // bus.$on('changeBadge', function (goodsCount)  {
      //   this.count+=goodsCount
      // }.bind(this))
    },
    updated(){
        this.count = this.$store.getters.getGoodsTotalCount
    },
    methods:{
      goBack(){
        this.$router.go(-1) //底层等同于 history.back()
      },
      isShowOrHide(path){//根据路径决定显示还是影藏返回按钮和底部TabBar
        if(path!='/home'){
          this.isShowBack = true
          this.isHideTabBar = true
        }else{//首页
          this.isShowBack = false
          this.isHideTabBar = false
        }
      }
    },
    watch:{
      $route:function(newValue, oldValue){
        this.isShowOrHide(newValue.path)
      }
    }
  }
</script>


