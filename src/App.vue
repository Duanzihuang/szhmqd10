<template>
  <div>
    <!-- 1.0 头部 -->
    <mt-header fixed title="Vue_CMS"></mt-header>

    <!-- 2.0 中间内容 路由 -->
    <router-view class="centerContent"></router-view>

    <!-- 3.0 底部TabBar -->
    <mt-tabbar fixed>
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
</style>


