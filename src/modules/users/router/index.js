
import UsersLayout from '@/modules/users/layouts/UsersLayout.vue';
import UsersTable from '@/modules/users/components/UsersTable.vue';
import UserDetails from '@/modules/users/components/UserDetails.vue';
import UsersForm from '@/modules/users/components/UserForm.vue';
export default {
  name: 'users',
  path: '/users',
  component: UsersLayout,
  children: [
    {
      path: 'list',
      name: 'usersTable',
      component: UsersTable
    },
    {
      path: 'new',
      name: 'newUser',
      component: UsersForm
    },
    {
      path: ':id/edit',
      name: 'editUser',
      component: UsersForm,
      props: (route) => {
        return {
          id: route.params.id
        }
      }
    },
    {
      path: ':id',
      name: 'userDetails',
      component: UserDetails,
      props: (route) => {
        return {
          id:route.params.id
        }
      }
    }
  ]
}