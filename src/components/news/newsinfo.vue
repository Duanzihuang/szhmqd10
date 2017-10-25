<template>
  <div v-if="isShow">
      <!-- 1.0 标题部分 -->
      <div class="titleStyle">
          <h3>{{newsInfo.title}}</h3>
          <p>{{newsInfo.add_time | dateFmt}}&nbsp;&nbsp;{{newsInfo.click}}次浏览&nbsp;&nbsp;分类:民生经济</p>
      </div>

      <!-- 2.0 内容部分 -->
      <div class="contentStyle">
          <p v-html="newsInfo.content"></p>
      </div>

      <!-- 3.0 评论子组件 -->
      <subcomment :commentId="this.$route.params.newsId"></subcomment>
  </div>
</template>

<style scoped>
    .titleStyle,.contentStyle{
        padding: 8px;
    }

    h3{
        font-size: 16px;
        color: #0094ff;
    }

    .titleStyle{
        border-bottom: 1px solid rgba(92,92,92,0.3);
    }
</style>


<script>
    import common from '../../common/common.js'

    import { Indicator } from 'mint-ui'

    //导入子组件
    import subcomment from '../subcomponents/subcomment.vue'

    export default{
        data(){
            return {
                newsInfo : {},
                isShow:false
            }
        },
        created(){
            this.getNewsInfoData()
        },
        methods:{
            getNewsInfoData(){
                const url = common.apihost+"api/getnew/"+this.$route.params.newsId
                
                Indicator.open({
                    text: '正在拼命加载中...',
                    spinnerType: 'triple-bounce'
               })

                this.$http.get(url).then(response=>{
                    this.newsInfo = response.body.message[0]
                    Indicator.close()
                    this.isShow = true
                },err=>{
                    Indicator.close()
                    console.log(err)
                })
            }
        },
        components:{//注册子组件使用
            subcomment:subcomment
        }
    }
</script>
