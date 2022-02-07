import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/home/home.vue')
  },
  {
    path: '/school/detail',
    name: 'schoolDetail',
    component: () => import(/* webpackChunkName: "schoolDetail" */ '../views/schoolDetail/schoolDetail.vue')
  },
  {
    path: '/school/list',
    name: 'schoolList',
    component: () => import(/* webpackChunkName: "schoolList" */ '../views/schoolList/schoolList.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
