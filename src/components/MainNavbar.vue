<template>
    <div id="component-navBar">
        <!-- Barra de navegación de Bootstrap -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navBar">
            <div class="container-fluid" id="list">

                <!-- Logo del sitio con ícono -->
                <a id="dynamicDomainLink" class="navbar-brand border rounded px-2" :href="baseUrl">
                    <img src="@/assets/logo.png" alt="ChibchaWeb Logo" id="logo">
                    ChibchaWeb
                </a>


                <!-- Botón de hamburguesa para menús en dispositivos móviles -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Menú principal de navegación -->
                <div class="collapse navbar-collapse" id="mainNavbar">
                    <ul class="navbar-nav" id="list-container">
                        <li class="nav-item">
                            <a class="nav-link" :href="`${baseUrl}/#/users/list`">
                                <i class="bi bi-person-square"></i> Usuarios
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :href="`${baseUrl}/#/customers/list`">
                                <i class="bi bi-people"></i> Clientes
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :href="`${baseUrl}/#/employees/list`">
                                <i class="bi bi-people-fill"></i> Empleados
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :href="`${baseUrl}/#/distribuitors/list`">
                                <i class="bi bi-buildings"></i> Distribuidores
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :href="`${baseUrl}/#/payments/list`">
                                <i class="bi bi-cash"></i> Pagos
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :href="`${baseUrl}/#/tickets/list`">
                                <i class="bi bi-question-diamond"></i> Tickets
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :href="`${baseUrl}/#/domain-request/list`">
                                <i class="bi bi-braces-asterisk"></i> Registro de dominio
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :href="`${baseUrl}/#/distribuitor-comissions/list`">
                                <i class="bi bi-coin"></i> Comision de distribuidores
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { SPA_CONFIG } from '@/config';
export default {
    computed: {
        baseUrl() {
            return SPA_CONFIG.BASE_URL;
        }
    }
}
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

#dynamicDomainLink {
    background-color: var(--background-oscuro);
    background-size: contain;
    background-position: 0%;
    font-family: 'Quicksand', sans-serif;
    padding: 5px;
}

#list-container {
    color: var(--background-purple-darck);
}

#logo {
    margin-right: 1%;
    height: 33px; 
    width: 33px;
}

.nav-link{
    color: var(--background-purple-medium);
}

.nav-link :hover{
    color: var(--background-purple-darck);
}



</style>