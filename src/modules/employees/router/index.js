
import EmployeesLayout from '@/modules/employees/layouts/EmployeesLayout.vue';
import EmployeesTable from '@/modules/employees/components/EmployeesTable.vue';
import EmployeeDetails from '@/modules/employees/components/EmployeeDetails.vue';
import EmployeesForm from '@/modules/employees/components/EmployeeForm.vue';
export default {
  name: 'employees',
  path: '/employees',
  component: EmployeesLayout,
  children: [
    {
      path: 'list',
      name: 'employeesTable',
      component: EmployeesTable
    },
    {
      path: 'new',
      name: 'newEmployee',
      component: EmployeesForm
    },
    {
      path: ':id/edit',
      name: 'editEmployee',
      component: EmployeesForm,
      props: (route) => {
        return {
          id: route.params.id
        }
      }
    },
    {
      path: ':id',
      name: 'employeeDetails',
      component: EmployeeDetails,
      props: (route) => {
        return {
          id:route.params.id
        }
      }
    }
  ]
}