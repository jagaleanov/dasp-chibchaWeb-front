<template>
  <div>
    <h4 v-if="id" class="mb-4">Editar empleado</h4>
    <h4 v-if="!id" class="mb-4">Nuevo empleado</h4>
    <div v-if="!id || !employeeIsLoading" class="row">
      <div class="col-sm-6 col-12 mb-3">
        <label for="name" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="name" v-model="formData.name" />
      </div>
      <div class="col-sm-6 col-12 mb-3">
        <label for="last_name" class="form-label">Apellido</label>
        <input type="text" class="form-control" id="last_name" v-model="formData.last_name" />
      </div>
      <div class="col-sm-6 col-12 mb-3">
        <label for="email" class="form-label">Correo electrónico</label>
        <input type="email" class="form-control" id="email" v-model="formData.email" />
      </div>
      <div class="col-sm-6 col-12 mb-3">
        <label for="password" class="form-label">Constraseña</label>
        <input type="password" class="form-control" id="password" v-model="formData.password" />
      </div>
      <div class="col-sm-6 col-12 mb-3">
        <label for="role" class="form-label">Rol</label>
        <select class="form-control" id="role" v-model="formData.role_id">
          <option v-for="roles in getRoles" :key="roles.id" :value="roles.id">{{ roles.name }}</option>
        </select>
      </div>
      <div class="col-sm-6 col-12 mb-3">
        <label for="mobile_phone" class="form-label">Celular</label>
        <input type="tel" class="form-control" id="mobile_phone" v-model="formData.mobile_phone" maxlength="10" />
      </div>
      <div class="col-12 mb-3">
        <button @click="saveForm" class="btn btn-primary me-2">Guardar</button>
      </div>
    </div>

    <div v-if="id && employeeIsLoading" class=" row justify-content-md-center">
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
import employeesApi from '@/modules/employees/api/employeesApi'
export default {
  props: {
    id: {
      type: String,
      required: false
    }
  },
  created() {
    if (this.id) {
      this.loadEmployee(this.id).then(() => {
        this.formData.name = this.getEmployee.name;
        this.formData.last_name = this.getEmployee.last_name;
        this.formData.email = this.getEmployee.email;
        this.formData.password = '*****';
        this.formData.role_id = this.getEmployee.role;
        this.formData.mobile_phone = this.getEmployee.mobile_phone;
      });
      
    }
    this.loadRoles()
  },
  data() {
    return {
      formData: {
        id: this.id || null,
        name: '',
        last_name: '',
        email: '',
        password: '',
        role_id: '',
        mobile_phone: '',
      }
    }
  },
  methods: {
    ...mapActions('employees', ['loadEmployee', 'loadRoles']),
    saveForm() {
      if (this.formData.id == null) {
        employeesApi.createEmployee(this.formData).then(response => {
            // Aquí manejas la respuesta de la operación exitosa
            console.log('Empleado creado con éxito:', response);
            this.$router.push('/employees/list');
          }).catch(error => {
            // Aquí manejas los errores
            alert(error.response.data.message)
            console.error('Error al crear el empleado:', error.response.data.message);
          });
      } else {
        employeesApi.editEmployee(this.formData.id, this.formData).then(response => {
            // Aquí manejas la respuesta de la operación exitosa
            console.log('Empleado actualziado con éxito:', response);
            this.$router.push('/employees/list');
          }).catch(error => {
            // Aquí manejas los errores
            alert(error.response.data.message)
            console.error('Error al actualizar el empleado:', error.response.data.message);
          });
      }
    }
  },
  computed: {
    ...mapGetters('employees', ['getEmployee','getRoles']),
    ...mapState('employees', ['employeeIsLoading'])
  },
};
</script>
