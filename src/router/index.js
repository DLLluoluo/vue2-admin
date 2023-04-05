import Vue from 'vue'
import VueRouter from 'vue-router'

/* Router Modules */
import home from '@/pages/home.vue'
import baseComponentsRouter from './modules/baseComponents'
import userRouter from './modules/user'

const routes = [
  { path: '/', name: 'home', component: home },
  ...baseComponentsRouter,
  ...userRouter,
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
})

export default router
