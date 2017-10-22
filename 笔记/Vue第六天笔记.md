# 内容回顾

## Vue-Preview
	先对比 template中的代码
	再对比数据
	
## 商品列表
	mui的图文表格
	
## 商品详情
	抽离轮播图 
	编程式导航的两种写法
		router.push(name/path,params/query)
	子组件传值给父组件
	生命周期(Vue组件/Vue实例)
	
## 生命周期函数(钩子)
	1、是Vue框架提供并且调用的
	2、我们程序员只需要实现即可，Vue框架会自动调用
	
	生命周期钩子的使用场景
		created 发送网络请求
		
		created destoryed
			统计用户喜欢哪个组件 1min
		
		destoryed 
			记录用户浏览器的记录
			把用户的一些重要信息保存起来
		
--------------------------

# 今日课程目标

## 非父子组件之间传值
	什么情况下才构成父子组件关系
	只有通过components注册的，才能成为父子关系
	
	需求:
		在goodsinfo.vue中点击了加入购物车，把该数字传递到App.vue，再显示出来
		
	步骤:
		1、点击goodsinfo.vue加入购物车，
		
	发送方(goodsinfo.vue)	
		bus.$emit
		
	接收方(App.vue)
		bus.$on
	
### 非父子组件和父子组件，传值时候的区别
	父子组件中，子组件传递个父组件可以通过 `this`
	
	非父子组件，只能靠同一个Vue实例传递值
	
------------------------------

## Vuex
	在各自组件之间进行数据的共享，专门用来给Vue进行全局数据管理的
	
	不同于window
	
	状态===数据
	
	概念:
		https://vuex.vuejs.org/zh-cn/intro.html
	
### 什么时候用Vuex
	https://vuex.vuejs.org/zh-cn/intro.html
	
### Vuex核心概念
	
	state:数据，里面是键值对
	getter:获取数据用的，里面是函数
	mutations:同步的保存或是更新仓库中的数据，里面也是函数
	action:异步的保存或是更新仓库中的数据，里面也是函数
	
	
	module:代表可以拥有多个仓库
	
	注意:
		1、state、getter、mutations、action、module都是一个对象
		
		2、state、module对象里面写的是键值对
		
		3、getter、mutations、action对象里面写的是函数
		
		4、一般在做耗时操作的时候，使用actions，如果不是耗时的任务使用mutations即可
		
		5、getter和mutations函数中的第一个参数必须是state
		
		6、getter必须要有返回值(return)，调用的时候不要加`()`
		
		7、mutations调用的时候用$store.commit
		
		8、actions调用的时候用的是$store.dispatch
		
### 代码的步骤
	1、在当前项目中集成Vuex
		安装包
		导入并且use
	
	2、创建仓库并且将我们的仓库注入到项目的根实例中，让我们项目拥有Vuex的功能
		参考:https://vuex.vuejs.org/zh-cn/getting-started.html
		
		
	思考
		加入购物车的时候，需要存储商品的哪些信息
			goodsId
			数量
			{goodsId:"87",count:3}
	
------------------------------

## 在购物车中获取数据
	this.$store.getters.getGoodsList

--------------------------

## 主流电商购物车数据的存储
	Vuex是把数据放在内存中的，不太适合保存购物车的数据
	
	京东:
		未登录
			浏览的cookies
		
		已登录
			保存到服务器
	
	淘宝:
		服务器
		
		
	cookies:(浏览器本地)
		优点:
			减少服务器压力，节省服务器资源  1K  1000万
		
		缺点:
			容易丢失用户某次的购买行为
	
	服务器端:
		优点:
			不会丢失用户加入购物车中的商品
			更加利于分析用户的购买行为，给用户推荐，促进更多的交易
			
		缺点:
			增加服务器压力，增加服务器的存储空间
		
------------------------------

## 今天安装的包
	vuex
		在哪里用?
			项目中需要集成vuex功能的时候
			
		安装方式
			npm install vuex --save
			

## 项目的周期要做多久?
	不好说
	
## 项目的某个版本，从立项到上线会经历哪几个阶段，哪些人参与，会出哪些成果
	
	需求调研阶段
		功能
		
		外包:客户 通过邮件确认
		
		做自家的产品 mobike
			PM 产品经理 张晓龙
			QQ 微信
			
			摇一摇
			附近的人
			轻量级
			朋友圈 封闭的系统
			
			天使轮 ---> A轮 ---> B ---> C ---> 40亿美金 ---> 上市
		
		出的成果:
			需求文档，辅助开发人员开发
	
	原型设计阶段
		产品经理 axure
			原型图/交互图
		
		美工MM
			效果图/标注图
			切图
	
	编码阶段
		预估工期
		
			1+1+2+1+3+2
		
			3~4
			
		联调
			1~2
			
		编码
			工作日志
			站会
			
		适当求助
	
	测试阶段
		测试MM
		
		回归测试
	
	上线阶段
		打包，上线