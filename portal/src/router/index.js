import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutDefault from '@/layout/index.vue'
import { getStorage } from '@/utils/storage'

const routes = [
  {
    path: '/',
    name: 'root',
    component: LayoutDefault,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = getStorage("token")

  if (!token && to.path !== '/login') {
    return next('/login')
  } else {
    return next()
  }
})

export default router
