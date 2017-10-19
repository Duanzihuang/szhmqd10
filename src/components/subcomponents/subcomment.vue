<template>
  <div>
      <!-- 1.0 提交评论区域 -->
      <div class="submitCommentStyle">
        <h4>提交评论</h4>
        <textarea ref="textAreaRef" cols="30" rows="5" placeholder="请输入评论内容"></textarea>
        <mt-button type="primary" @click="submitComment" size="large">提交评论</mt-button>
      </div>

      <!-- 2.0 评论列表区域 -->
      <div class="commentListStyle">
        <h4>评论列表</h4>
        <div v-for="(item,index) in commentList" :key="index" class="commentItemStyle">
            <p class="commentConentStyle">{{item.content}}</p>
            <p class="commentUserAndTimeStyle">
              <span>{{item.user_name}}</span>
              <span>{{item.add_time | dateFmt}}</span>
            </p>
        </div>
        <mt-button @click="loadMore" type="danger" class="loadMoreStyle" size="large" plain>加载更多</mt-button>
      </div>
  </div>
</template>

<style>
  .submitCommentStyle,.commentListStyle{
    padding: 8px;
  }

  h4{
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(92,92,92,0.3);
  }

  .commentItemStyle{
    height: 100px;
    overflow-y: auto;
    border-bottom: 1px solid rgba(92,92,92,0.3);
  }

  .commentConentStyle{
    margin-top: 10px;
    color: black;
    font-size: 14px;
  }

  .commentUserAndTimeStyle{
    margin-top: 30px;
    color: #0094ff;
    display: flex;
    justify-content: space-between;
  }

  .loadMoreStyle{
    margin-top: 10px;
  }
</style>


<script>
  import common from '../../common/common.js'

  //导入jquery
  // import $ from 'jquery'

  //按需导入Toast
  import { Toast } from 'mint-ui'

  export default{
    data(){
      return {
        commentList:[],
        pageIndex:1 //页码，默认是第一页
      }
    },
    created(){
      this.getCommentListData()
    },
    methods:{
      //根据页码获取评论数据
      getCommentListData(){
        const url = common.apihost+"api/getcomments/"+this.commentId+"?pageindex="+this.pageIndex

        this.$http.get(url).then(response=>{
          if(this.pageIndex==1){//第一页
            if(response.body.message.length==0){
              Toast({
                message: '还没有沙发，赶快抢占',
                position: 'middle',
                duration: 3000
              });
            }else{
              this.commentList = response.body.message
            }
          }else{//非第一页
            if(response.body.message.length==0){
              Toast({
                message: '没有啦，别点啦!!!',
                position: 'middle',
                duration: 3000
              });
            }else{
              this.commentList = this.commentList.concat(response.body.message)
            }
          }
        },err=>{
          console.log(err)
        })
      },
      //加载更多
      loadMore(){
        this.pageIndex++
        this.getCommentListData()
      },
      //提交评论
      submitComment(){
        //获取textarea的值  v-model 原生js 
        var content  = this.$refs.textAreaRef.value
        if(content.length===0){
          Toast({
            message: '请输入要评价的内容',
            position: 'middle',
            duration: 3000
          });
          return 
        }

        //发送网络请求
        const url = common.apihost+"api/postcomment/"+this.commentId
        this.$http.post(url,{content:content},{emulateJSON:true}).then(response=>{
          //1.显示服务器返回的提示
          Toast({
            message: response.body.message,
            position: 'middle',
            duration: 3000
          });

          //2.内容清空
          this.$refs.textAreaRef.value = ''

          //3.重新查询第一页
          this.pageIndex = 1
          this.getCommentListData()
        });
      }
    },
    props:['commentId'] //父组件到时候传递值就根据该名称
  }
</script>
