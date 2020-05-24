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
        },
        {
          path: '/product/:id',
          name: 'product',
          component: () => import('../pages/product')
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: () => import('../pages/detail')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/register')
    }
]

const router = new VueRouter({
  routes
})

export default router
