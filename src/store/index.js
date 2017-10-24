import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) //Vue.propertype.$store

//导入模块
import state from './state.js'
import getters from './getter.js'
import mutations from './mutations.js'
import actions from './action.js'

//Vuex
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

//CommonJS规范中，es6导出方式写法
export default store
