import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      icon: 'el-icon-setting',
      title: '首页',
    },
    component: () => import('../views/home/index.vue'),
  },
]

const createRouter = () =>
  new VueRouter({
    mode: "history",
    routes: constantRoutes,
  })

const router = createRouter()

export default router
