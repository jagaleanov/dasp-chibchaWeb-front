<template>
  <div class="card-body">
    <form @submit.prevent="login" v-if="status != 'authenticating'" class="form-signin">
      <div class="mb-3">
        <label for="email" class="form-label">Correo electrónico</label>
        <input type="email" class="form-control" id="email" v-model="formData.email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="password" v-model="formData.password" required>
      </div>
      <button type="submit" class="btn btn-primary">Ingresar</button>
    </form>
    <div v-if="status == 'authenticating'" class=" row justify-content-md-center"></div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
// import authApi from '@/modules/auth/api/authApi'

export default {
  name: 'LoginForm',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    ...mapActions('auth', ['loginUser']),
    login() {
      this.loginUser(this.formData)
        .then(response => {
          // Aquí manejas la respuesta de la operación exitosa
          console.log('Total calculado con éxito:', response);
          this.$router.push('/customers/list');
        })
        .catch(error => {
          // Aquí manejas los errores
          alert('Credenciales inválidas')
          console.error('Fallo el login:', error.response.data.message);
        });
    }
  },
  computed: {
    ...mapState('auth', ['status'])
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>