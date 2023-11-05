import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import usersRouter from '@/modules/user/router'
import authRouter from '@/modules/auth/router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    ...usersRouter
  },
  {
    path: '/auth',
    ...authRouter
  },
]

const router = createRouter({
  history: createWebHashHistory(/*process.env.BASE_URL*/),
  routes
})

export default router
