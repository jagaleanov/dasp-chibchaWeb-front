<template>
  <div>
    <h4 v-if="id" class="mb-4">Editar cliente</h4>
    <h4 v-if="!id" class="mb-4">Nuevo cliente</h4>
    <div v-if="!id || !customerIsLoading" class="row">
      <div class="col-sm-6 col-12 mb-3">
        <label for="name" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="name" v-model="formData.name" />
      </div>
      <div class="col-sm-6 col-12 mb-3">
        <label for="last_name" class="form-label">Apellido</label>
        <input type="text" class="form-control" id="last_name" v-model="formData.last_name" />
      </div>
      <div class="col-sm-6 col-12 mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" v-model="formData.email" />
      </div>
      <div class="col-sm-6 col-12 mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="formData.password" />
      </div>
      <div class="col-12 mb-3">
        <button @click="saveForm" class="btn btn-primary me-2">Guardar</button>
      </div>
    </div>

    <div v-if="id && customerIsLoading" class=" row justify-content-md-center">
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
import customersApi from '@/modules/customers/api/customersApi'
export default {
  props: {
    id: {
      type: String,
      required: false
    }
  },
  created() {
    if (this.id) {
      this.loadCustomer(this.id).then(() => {
        this.formData.name = this.getCustomer.name;
        this.formData.last_name = this.getCustomer.last_name;
        this.formData.email = this.getCustomer.email;
        this.formData.password = '*****';
      });
    }
  }
  ,
  data() {
    return {
      formData: {
        id: this.id || null,
        name: '',
        last_name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('customers', ['loadCustomer']),
    async saveForm() {
      if (this.formData.id == null) {
        await customersApi.createCustomer(this.formData);
      } else {
        await customersApi.editCustomer(this.formData.id, this.formData);
      }
    }
  },
  computed: {
    ...mapGetters('customers', ['getCustomer']),
    ...mapState('customers', ['customerIsLoading'])
  },
};
</script>
