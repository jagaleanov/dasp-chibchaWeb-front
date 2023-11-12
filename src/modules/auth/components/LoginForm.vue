<template>
    <MainNavbar /> <!-- Componente de navegación superior -->
    <div>
        <div class="card" id="container">
            <div class="card" id="card">
                <h2 class="mt-2">Login</h2> <!-- Título "Login" -->
                <hr> <!-- Línea horizontal -->
                <div class="avatar" alt="@/assets/logo.png">
                </div> <!-- Elemento para mostrar un avatar -->
                <form @submit="loginSubmit(formData)" id="formulario">
                    <div class="mb-3" id="email-space">
                        <label class="form-label">Email address</label>
                        <!-- Etiqueta para el campo de correo electrónico -->
                        <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label> <!-- Etiqueta para el campo de contraseña -->
                        <input v-model="password" type="password" class="form-control">
                    </div>
                    <button type="submit" class="btn btn-primary" id="login">Log in</button>
                    <!-- Botón para iniciar sesión -->
                </form>
                <!-- <button type="reset" class="btn btn-secondary" id="signup">sign up</button> Botón para registrarse -->
            </div>
        </div>
    </div>
</template>

<script>
import authApi from '@/modules/auth/api/authApi.js'; // Importa el módulo de autenticación
import MainNavbar from '@/components/MainNavbar.vue'; // Importa el componente de la barra de navegación principal
export default {
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    components: {
        MainNavbar
    },
    methods: {
        async loginSubmit(formData) {
            const { email, password } = formData;
            const { data } = await authApi.login({ email, password }); // Llama a la función de inicio de sesión y obtiene la respuesta

            if (data.status == "success") {
                let token = data.data.token; // Extrae el token de la respuesta exitosa
                localStorage.setItem("token", token); // Almacena el token en el almacenamiento local
                //this.$router.push("/users/users"); // Redirige a la página de usuarios después del inicio de sesión exitoso
            } else {
                console.error("Error en el incio de sesion: ", data.message); // Muestra un mensaje de error en caso de inicio de sesión fallido
            }
        }
    },
};
</script>


<style>
:root {
    --background-oscuro: #182b3a;
    --background-claro: #def5e9;
    --background-purple-medium: #cdccb3;
    --background-purple-darck: #00e04a;
    --background-purple-claro: #afbd86;
    font-family: 'Quicksand', sans-serif;
}



#background-login {
    height: 0px;
    width: 0px;
}

#container {
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url("@/assets/fondo.jpg");
    background-size: contain;
    background-position: 0%;
    margin: 0px 0px;
    padding: 0%;
}

#card {
    position: absolute;
    transform: translate(+50%, +10%);
    text-align: center;
    width: 50%;
    color: var(--background-claro);
    font-size: medium;
    box-shadow: 10px 15px 40px #000;
    background-color: var(--background-oscuro);
    margin-bottom: 0%;
    margin-top: 0%;
}


label {
    margin-top: 2%;
    padding: 0;
    font-weight: bold;
    display: block;
}

button {
    margin-bottom: 5%;
}

.mb-3 {
    margin-inline: 5%;
}

.mt-2 {
    font-weight: bold;
}

#login {
    background-color: var(--background-purple-darck);
    color: var(--background-oscuro);
    font-weight: bold;
}

#signup {
    background-color: var(--background-purple-claro);
    color: var(--background-oscuro);
    font-weight: bold;
}

.form-control {
    text-align: left;
    position: relative;

}

.avatar {
    position: relative;
    background-color: var(--background-oscuro);
    background-image: url("@/assets/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    width: 150px;
    height: 150px;
    margin-inline: auto;
    margin-top: 5%;
}
</style>
