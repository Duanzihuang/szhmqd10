<template>
  <div>
    <!-- 1.0 轮播图 -->
    <subswipe lunbo_url="api/getlunbo" :lunbo_time="lunboTime"></subswipe>

    <!-- 2.0 九宫格布局 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/news/newslist">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/photo/photolist">
            <span class="mui-icon mui-icon-email">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/goods/goodslist">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  /* 1.0 九宫格布局样式 */
  .mui-grid-view.mui-grid-9{
    background-color: #ffffff;
    border: 0px;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
     border: 0px;
  }

  .mui-icon{
    width: 50px;
    height: 50px;
  }

  .mui-icon-home:before,
  .mui-icon-email:before,
  .mui-icon-chatbubble:before,
  .mui-icon-location:before,
  .mui-icon-search:before,
  .mui-icon-phone:before{
    content:'';
  }

  .mui-icon-home{
    background-image: url(../../statics/images/menu3.png);
    background-size: cover;
  }

  .mui-icon-email{
    background-image: url(../../statics/images/menu4.png);
    background-size: cover;
  }

  .mui-icon-chatbubble{
    background-image: url(../../statics/images/menu5.png);
    background-size: cover;
  }

  .mui-icon-location{
    background-image: url(../../statics/images/menu6.png);
    background-size: cover;
  }

  .mui-icon-search{
    background-image: url(../../statics/images/menu9.png);
    background-size: cover;
  }

  .mui-icon-phone{
    background-image: url(../../statics/images/menu10.png);
    background-size: cover;
  }

</style>


<script>
  import common from '../../common/common.js'

  //导入轮播子组件
  import subswipe from '../subcomponents/subswipe.vue'

  /**
   * 1、如果我们需要在组件中写业务逻辑(比如网络请求或是点击事件等)，必须导出一个Vue对象
   * 2、导出Vue对象的写法，可以是es5 module.exports = {} 也可是es6的 export default{}
   */
  export default {
    data: function() {
      return {
        lunboTime:3000
      }
    },
    components:{
      subswipe
    }
  }
</script>
