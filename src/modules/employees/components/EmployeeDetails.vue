<template>
  <div>
    <div v-if="!employeeIsLoading">
      <h4 class="modal-title mb-4">Detalles</h4>
        <strong>Nombre:</strong> {{ getEmployee.name }}<br>
        <strong>Apellido:</strong> {{ getEmployee.last_name }}<br>
        <strong>Correo electrónico:</strong> {{ getEmployee.email }}<br>
        <strong>Celular:</strong> {{ getEmployee.mobile_phone }}<br>
        <strong>Fecha de registro:</strong> {{ getEmployee.created_at }}<br>
        <strong>Fecha de actualización:</strong> {{ getEmployee.updated_at }}
    </div>

    <div v-if="employeeIsLoading" class=" row justify-content-md-center">
      <div class="col-3 alert-info text-center mt-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  created() {
    this.loadEmployee(this.id)
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions('employees', ['loadEmployee'])
  },
  computed: {
    ...mapGetters('employees', ['getEmployee']),
    ...mapState('employees', ['employeeIsLoading'])
  },
};
</script>
