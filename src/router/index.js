import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import authRouter from '@/modules/auth/router'
import usersRouter from '@/modules/users/router'
import customersRouter from '@/modules/customers/router'
import employeesRouter from '@/modules/employees/router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    ...authRouter
  },
  {
    path: '/users',
    ...usersRouter
  },
  {
    path: '/customers',
    ...customersRouter
  },
  {
    path: '/employees',
    ...employeesRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(/*process.env.BASE_URL*/),
  routes
})

export default router
