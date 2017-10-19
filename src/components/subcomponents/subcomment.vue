<template>
  <div>
      <!-- 1.0 提交评论区域 -->
      <div class="submitCommentStyle">
        <h4>提交评论</h4>
        <textarea name="" id="" cols="30" rows="5" placeholder="请输入评论内容"></textarea>
        <mt-button type="primary" size="large">提交评论</mt-button>
      </div>

      <!-- 2.0 评论列表区域 -->
      <div class="commentListStyle">
        <h4>评论列表</h4>
        <div class="commentItemStyle">
            <p class="commentConentStyle">小可爱是大家的</p>
            <p class="commentUserAndTimeStyle">
              <span>匿名用户</span>
              <span>2017-10-19</span>
            </p>
        </div>
        <mt-button type="danger" class="loadMoreStyle" size="large" plain>加载更多</mt-button>
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
  export default{
    created(){
      console.log(this.commentId)
    },
    props:['commentId'] //父组件到时候传递值就根据该名称
  }
</script>
