import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import usersRouter from '@/modules/user/router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    ...usersRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(/*process.env.BASE_URL*/),
  routes
})

export default router
