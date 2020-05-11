import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/home'),
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('../pages/index')
        }
      ]
    }
]

const router = new VueRouter({
  routes
})

export default router
