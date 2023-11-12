<template>
  <div>
    <div v-if="!customerIsLoading">
      <h4 class="modal-title mb-4">Detalles</h4>
        <strong>Nombre:</strong> {{ getCustomer.name }}<br>
        <strong>Apellido:</strong> {{ getCustomer.last_name }}<br>
        <strong>Correo electrónico:</strong> {{ getCustomer.email }}<br>
        <strong>Fecha de registro:</strong> {{ getCustomer.created_at }}<br>
        <strong>Fecha de actualización:</strong> {{ getCustomer.updated_at }}
    </div>

    <div v-if="customerIsLoading" class=" row justify-content-md-center">
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
