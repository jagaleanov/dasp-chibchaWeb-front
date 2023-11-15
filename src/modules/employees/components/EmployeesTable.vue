<template>
  <div>
    <div>
      <h4 class="modal-title mb-1">Listado</h4>
      <nav class="nav justify-content-end mb-3">
        <router-link to="/employees/new" class="btn btn-outline-primary">
          <i class="bi bi-person"></i> Nuevo empleado
        </router-link>
      </nav>
      <router-view></router-view>
      <table v-if="!employeesAreLoading" class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo electrónico</th>
            <th scope="col">Celular</th>
            <th scope="col">Fecha de registro</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in getEmployees" :key="employee.id">
            <td>{{ employee.id }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.last_name }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.mobile_phone }}</td>
            <td>{{ employee.created_at }}</td>
            <td>
              <button @click="$router.push(`/employees/${employee.id}/edit`)" type="button"
                class="btn btn-primary btn-sm ms-1 mb-1">
                <i class="bi bi-pencil-square" title="Editar usuario"></i>
              </button>
              <button @click="$router.push(`/employees/${employee.id}`)" type="button" class="btn btn-primary btn-sm ms-1 mb-1">
                <i class="bi bi-eye" title="Ver detalles"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="employeesAreLoading" class=" row justify-content-md-center">
        <div class="col-3 alert-info text-center mt-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  created() {
    this.loadEmployees()
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions('employees', ['loadEmployees'])
  },
  computed: {
    ...mapGetters('employees', ['getEmployees']),
    ...mapState('employees', ['employeesAreLoading'])
  },
};
</script>
