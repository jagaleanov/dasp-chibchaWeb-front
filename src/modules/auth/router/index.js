import AuthLayout from '@/modules/auth/layouts/AuthLayout.vue';
import LoginForm from '@/modules/auth/components/LoginForm.vue';
export default {
  name: 'auth',
  path: '/auth',
  component: AuthLayout,
  children: [
    {
      path: '',
      name: 'login',
      component: LoginForm
    },
  ]
}