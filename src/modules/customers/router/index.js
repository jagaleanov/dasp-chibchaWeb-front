
import CustomersLayout from '@/modules/customers/layouts/CustomersLayout.vue';
import CustomersTable from '@/modules/customers/components/CustomersTable.vue';
import CustomerDetails from '@/modules/customers/components/CustomerDetails.vue';
import CustomersForm from '@/modules/customers/components/CustomerForm.vue';
import CustomersRegister from '@/modules/customers/components/CustomerRegister.vue';
export default {
  name: 'customers',
  path: '/customers',
  component: CustomersLayout,
  children: [
    {
      path: 'list',
      name: 'customersTable',
      component: CustomersTable
    },
    {
      path: 'new',
      name: 'newCustomer',
      component: CustomersRegister
    },
    {
      path: ':id/edit',
      name: 'editCustomer',
      component: CustomersForm,
      props: (route) => {
        return {
          id: route.params.id
        }
      }
    },
    {
      path: ':id',
      name: 'customerDetails',
      component: CustomerDetails,
      props: (route) => {
        return {
          id:route.params.id
        }
      }
    }
  ]
}