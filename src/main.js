import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 重置样式
import './../src/assets/scss/reset.scss'
// 通用样式
import './../src/assets/scss/base.scss'

// 根据前端跨域方式调整  
// /api 代理方式配置
axios.defaults.baseURL = '/api'
// 超时时间
axios.defaults.timeout = 8000
// 错误拦截代码
axios.interceptors.response.use(function(response) {
  //取得接口的值
  let res =  response.data
  if (res.status === 0){
    return res.data
  } else if (res.status === 10){
    //window.location 对象可用于获取当前页面地址（URL）并把浏览器重定向到新页面。
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

//生产环境的提示
Vue.config.productionTip = false

Vue.use(VueAxios,axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
