import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 图片懒加载插件
import VueLazyLoad from 'vue-lazyload'
// cookie插件
// import VueCookies from 'vue-cookies'
// 重置样式
import './../src/assets/scss/reset.scss'
// 通用样式
import './../src/assets/scss/base.scss'
// 全局消息弹框组件
import Modal from './components/Modal'
Vue.component('modal',Modal)
// 全局按钮样式
import '../src/assets/scss/button.scss'
// 根据前端跨域方式调整  
// /api 代理方式配置
axios.defaults.baseURL = '/api'
// 超时时间
axios.defaults.timeout = 8000
// 错误拦截代码
axios.interceptors.response.use(function(response) {
// 取得接口的值
  let res =  response.data
  // 获得当前地址
  let path = location.hash
  if (res.status === 0){
    return res.data
  } else if (res.status === 10){
    if (path != '#/index'){
      //window.location 对象可用于获取当前页面地址（URL）并把浏览器重定向到新页面。
      window.location.href = '/#/login'
    }
  } else {
    // 抛出异常
    return Promise.reject(res)
  }
})

//生产环境的提示
Vue.config.productionTip = false

Vue.use(VueAxios,axios)
Vue.use(VueLazyLoad,{
  loading: '/imgs/loading-svg/loading-bars.svg'
})
// Vue.use(VueCookies)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
