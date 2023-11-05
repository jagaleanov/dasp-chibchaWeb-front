<template>
    <div>
        <MainNavbar />
        <div class="container-fluid">
            <h2 class="mt-2">Login</h2>
            <hr>
            <div class="card" id="container">
                <div class="card" id="card">
                    <div class="avatar" alt="C:\Users\Admin\Documents\chibchaweb\dasp-chibchaWeb\spa\src\assets\logo.png">
                    </div>
                    <form @submit="login()" id="formulario">
                        <div class="mb-3" id="email-space">
                            <label class="form-label">Email address</label>
                            <input v-model="username" type="email" class="form-control" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input v-model="password" type="password" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-primary" id="login">Iniciar sesion</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainNavbar from '@/components/MainNavbar.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        MainNavbar
    },
};
</script>