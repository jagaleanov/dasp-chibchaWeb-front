<template>
    <div>
        <!-- Barra de navegación de Bootstrap -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">

                <!-- Logo del sitio con ícono -->
                <a id="dynamicDomainLink" class="navbar-brand border rounded px-2" :href="baseUrl"><i
                        class="bi bi-globe2"></i>
                    ChibchaWeb</a>

                <!-- Botón de hamburguesa para menús en dispositivos móviles -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Menú principal de navegación -->
                <div class="collapse navbar-collapse" id="mainNavbar">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" v-if="getRole == 'admin'">
                            <a class="nav-link" :href="`${baseUrl}/#/users/list`">
                                <i class="bi bi-person-square"></i> Usuarios
                            </a>
                        </li>
                        <li class="nav-item" v-if="getRole == 'admin'">
                            <a class="nav-link" :href="`${baseUrl}/#/customers/list`">
                                <i class="bi bi-people"></i> Clientes
                            </a>
                        </li>
                        <li class="nav-item" v-if="getRole == 'admin'">
                            <a class="nav-link" :href="`${baseUrl}/#/employees/list`">
                                <i class="bi bi-people-fill"></i> Empleados
                            </a>
                        </li>
                        <li class="nav-item" v-if="getRole == 'admin'">
                            <a class="nav-link" :href="`${baseUrl}/#/distribuitors/list`">
                                <i class="bi bi-buildings"></i> Distribuidores
                            </a>
                        </li>
                        <li class="nav-item" v-if="getRole == 'admin'">
                            <a class="nav-link" :href="`${baseUrl}/#/payments/list`">
                                <i class="bi bi-cash"></i> Pagos
                            </a>
                        </li>
                        <li class="nav-item" v-if="getRole == 'admin'">
                            <a class="nav-link" :href="`${baseUrl}/#/tickets/list`">
                                <i class="bi bi-question-diamond"></i> Tickets
                            </a>
                        </li>
                        <li class="nav-item" v-if="getRole == 'admin'">
                            <a class="nav-link" :href="`${baseUrl}/#/domain-request/list`">
                                <i class="bi bi-braces-asterisk"></i> Registro de dominio
                            </a>
                        </li>
                        <li class="nav-item" v-if="getRole == 'admin'">
                            <a class="nav-link" :href="`${baseUrl}/#/distribuitor-comissions/list`">
                                <i class="bi bi-coin"></i> Comision de distribuidores
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :href="`${baseUrl}/#/`">
                                <i class="bi bi-coin"></i> Link publico
                            </a>
                        </li>
                    </ul>
                    <div class="d-flex" v-if="getRole == 'public'">
                        <a class="btn btn-outline-light" :href="`${baseUrl}/#/auth`">Login</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { SPA_CONFIG } from '@/config';
import {  mapActions,mapGetters } from 'vuex'
export default {
    created() {
        this.initializeAuth()
    },
    methods: {
        ...mapActions('auth', ['initializeAuth']),
    },
    computed: {
    ...mapGetters('auth', ['getRole']),
        baseUrl() {
            return SPA_CONFIG.BASE_URL;
        }
    }
}
</script>
