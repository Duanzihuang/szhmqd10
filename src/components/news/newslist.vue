<template>
  <div class="mui-content">
      <ul class="mui-table-view">
				<li v-for="item in newslist" :key="item.id" class="mui-table-view-cell mui-media">
          <!-- 栗子：/news/newsinfo/13 -->
					<router-link :to="'/news/newsinfo/'+item.id"> 
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<p class="titleStyle">{{item.title}}</p>
							<p class='mui-ellipsis'>
                <span>{{item.add_time | dateFmt('YYYY-MM-DD HH:mm')}}</span>
                <span>点击数{{item.click}}次</span>
              </p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>

<style scoped>
  .mui-table-view-cell{
    height: 80px;
  }

  .mui-table-view-cell .mui-pull-left{
    min-width:65px;
    height: 65px;
  }

  .titleStyle{
    font-size: 14px;
    color: gray;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .mui-ellipsis{
    margin-top: 20px;
    color: #0094ff;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
</style>


<script>
  //导入其它模块
  import common from '../../common/common.js'

  //导出Vue对象
  export default{
    // data:function(){ //es3
    //   return {

    //   }
    // }
    data(){ //es5
      return {
        newslist:[]
      }
    },
    created(){//Vue框架内部会自动调用
      this.getNewsListData()
    },
    methods:{
      //获取新闻列表数据
      getNewsListData(){
        const url = common.apihost+"api/getnewslist"

        this.$http.get(url).then(response=>{
          this.newslist = response.body.message
        },err=>{
          console.log(err)
        })
        
        /**
          this.$axios.get(url).then(response=>{
            this.newslist = response.data.message
          })
        */
      }
    }
  }
</script>
