<template>
    <div class="card-body">
        <form @submit.prevent="login"  v-if="status != 'authenticating'">
            <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico</label>
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
import authApi from '@/modules/auth/api/authApi'

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
        async login() {
            // Lógica de autenticación
            // console.log("formData", this.formData);
            await authApi.loginUser(this.formData);
        }
    },
    computed: {
        ...mapState('auth', ['status'])
    },
};
</script>
