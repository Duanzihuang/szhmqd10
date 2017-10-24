# 内容回顾


## 生命周期钩子(函数)
	beforeCreate
	created
	beforeMount
	mounted
	beforeUpdate(可能会调用多次)
	updated(可能会调用多次)
	beforeDestory
	destoryed
	
	你实现了，就会自动调用
	
	created 发送网络请求
	
	created destoryed 知道用户的偏好
	
	destoryed 记录用户浏览记录
	
	destoryed 记录用户填写信息
	
## 编程式导航的几种写法
	js函数中要进行导航
	
	this.$router.go(-1)
	this.$router.push(name/path,params/query)
	
## Vuex
	作用:Vue项目中全局数据管理
	
	state  对象里面方的是键值对
	getter 函数 返回东西给组件去用
	mutations 函数 同步
	action 函数 异步
	
	内存存储
	
## 主流电商购物车数据存储方案
	本地 
		cookie
		localStorage
		
	服务器
		
## 项目某个版本的开发流程
	需求调研阶段
	原型设计阶段
	编码阶段
	测试阶段
	上线阶段

-----------------------

# 购物车中数据存储的方式
	
	购物车数组:
		[{goodsId:"87",count:2},{goodsId:"88",count:3},{goodsId:"87",count:3}]
		
		上面的这个数据，既要方便我们发送网络请求时候用，又要方便将来展现的时候，合并我们的数量
		
		
	首先我们要做到的事情是什么?
		1、把里面id取出来，将来去发送网络请求用
		
		2、把服务器返回的商品的信息(价格、名称、缩略图)呈现在购物车组件里面
		
	http://vue.studyit.io/api/goods/getshopcarlist/87,88

## 购物车中原始数据变化的一个过程
	对象 for in
	数组 forEach

	1、
		[{goodsId:"87",count:2},{goodsId:"88",count:3},{goodsId:"87",count:3}]
	
	2、
		var tempObj = {
			"87":5,
			"88":3
		}
	
	3、["87","88"]
	
	4、数组的join方法 `87,88`

## 我们的购物车组件中商品每一项Switch绑定的同一个模型解决办法分析
	分开绑定???
	
	1、自己新建一个数组 switchValues 里面装对应个数的boolean值
	
	2、巧妙的借助response.body.message这个数组【推荐】


## 购物车展示还需要做的事情
	1、开关变化之后
		统计我们付款信息
		更改对应行的按钮的状体

	2、当我们删除了某个商品之后
		重新计算付款信息
		Vuex 中的数据要更改
		页面上看到的内容就是剩余的
			删除掉该条数据
		
## 入职当天、前两周
	签合同
		保密协议 
	
	新媒体部
		邮箱
		OA
		
	天天围着它
	
	沉淀下来学习东西
	
	
		
-----------------------