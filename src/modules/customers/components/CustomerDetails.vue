<template>
  <div class="container">
    <div v-if="!customerIsLoading">
      <h4 class="modal-title my-4">Detalles</h4>

      <dl class="row">
        <dt class="col-sm-3">Nombre</dt>
        <dd class="col-sm-9">{{ getCustomer.name }}</dd>

        <dt class="col-sm-3">Apellido</dt>
        <dd class="col-sm-9">{{ getCustomer.last_name }}</dd>

        <dt class="col-sm-3">Correo electrónico</dt>
        <dd class="col-sm-9">{{ getCustomer.email }}</dd>

        <dt class="col-sm-3">Fecha de registro</dt>
        <dd class="col-sm-9">{{ getCustomer.created_at }}</dd>

        <dt class="col-sm-3">Fecha de actualización</dt>
        <dd class="col-sm-9">{{ getCustomer.updated_at }}</dd>
      </dl>
    </div>
    <div v-if="customerIsLoading" class=" row justify-content-md-center">
      <div class="col-3 alert-info text-center mt-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>

    <h4 class="modal-title my-4">Hosts</h4>

    <div class="list-group">
      <div class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">127.0.0.1</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Chibcha-Platino</p>
        <p class="mb-1"><small class="text-muted">Linux/Mensual</small></p>
        <a href="#" class="btn btn-primary btn-lg btn-sm me-1" role="button" aria-pressed="true">Iniciar ticket de
          soporte</a>
        <a href="#" class="btn btn-primary btn-lg btn-sm" role="button" aria-pressed="true">Solicitar dominio</a>
      </div>
      <div class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">127.0.0.1</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Chibcha-Platino</p>
        <p class="mb-1"><small class="text-muted">Linux/Mensual</small></p>
        <a href="#" class="btn btn-primary btn-lg btn-sm me-1" role="button" aria-pressed="true">Iniciar ticket de
          soporte</a>
        <a href="#" class="btn btn-primary btn-lg btn-sm" role="button" aria-pressed="true">Solicitar dominio</a>
      </div>
    </div>
    <div class="d-flex flex-row-reverse my-2">
      <a href="#" class="btn btn-primary btn-lg btn-sm" role="button" aria-pressed="true">Comprar un nuevo hosting</a>
    </div>

    <h4 class="modal-title my-4">Tickets de soporte</h4>

    <h4 class="modal-title my-4">Solicitudes de dominios</h4>

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
    this.loadCustomer(this.id)
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions('customers', ['loadCustomer'])
  },
  computed: {
    ...mapGetters('customers', ['getCustomer']),
    ...mapState('customers', ['customerIsLoading'])
  },
};
</script>
