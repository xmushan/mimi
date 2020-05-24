import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '', // 用户名
    cartCount: 0  // 购物车数量
  },
  mutations,
  actions
})
