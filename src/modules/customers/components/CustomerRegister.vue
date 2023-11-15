<template>
  <div>
    <h4 class="mb-4">Nuevo cliente</h4>
    <div class="row">

      <h5 class="mb-4">Datos del cliente</h5>
      <div class="row">
        <div class="col-sm-6 col-12 mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" v-model="formData.name" />
        </div>
        <div class="col-sm-6 col-12 mb-3">
          <label for="last_name" class="form-label">Apellido</label>
          <input type="text" class="form-control" id="last_name" v-model="formData.last_name" />
        </div>
        <div class="col-sm-6 col-12 mb-3">
          <label for="email" class="form-label">Email </label>
          <input type="email" class="form-control" id="email" v-model="formData.email" />
        </div>
        <div class="col-sm-6 col-12 mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="formData.password" />
        </div>
        <div class="col-sm-6 col-12 mb-3">
          <label for="address" class="form-label">Dirección</label>
          <input type="text" class="form-control" id="address" v-model="formData.address" />
        </div>
      </div>

      <h5 class="mb-4">Datos del hosting</h5>
      <div class="row">
        <div class="col-sm-6 col-12 mb-3">
          <label for="host_plan" class="form-label">Plan</label>
          <select class="form-control" id="host_plan" v-model="formData.host_plan">
            <option v-for="hostPlan in getHostPlans" :key="hostPlan.id" :value="hostPlan.id">{{ hostPlan.name }}</option>
          </select>
        </div>
        <div class="col-sm-6 col-12 mb-3">
          <label for="operative_system" class="form-label">Sistema operativo</label>
          <select class="form-control" id="operative_system" v-model="formData.operative_system">
            <option v-for="operativeSystem in getOperativeSystems" :key="operativeSystem.id" :value="operativeSystem.id">
              {{ operativeSystem.name }}</option>
          </select>
        </div>
        <div class="col-sm-6 col-12 mb-3">
          <label for="payment_plan" class="form-label">Plan de pagos</label>
          <select class="form-control" id="payment_plan" v-model="formData.payment_plan">
            <option v-for="paymentPlan in getPaymentPlans" :key="paymentPlan.id" :value="paymentPlan.id">{{
              paymentPlan.name }}</option>
          </select>
        </div>
      </div>
      <p>Total: ${{ formData.amount }}</p>

      <h5 class="mb-4">Datos del pago</h5>
      <h6 class="mb-4">Tarjeta de crédito</h6>

      <div class="row">
        <div class="col-sm-3 col-6 mb-3">
          <label for="credit_card_number" class="form-label">Número</label>
          <input type="text" class="form-control" id="credit_card_number" v-model="formData.credit_card_number"
            @input="getCardIssuer" />
        </div>
        <div class="col-sm-3 col-6 mb-3">
          <span>Emisor: {{ cardIssuer }}</span> <!-- Elemento para mostrar el emisor de la tarjeta -->
        </div>
        <div class="col-sm-6 col-12 mb-3">
          <label for="credit_card_name" class="form-label">Nombre en la tarjeta</label>
          <input type="text" class="form-control" id="credit_card_name" v-model="formData.credit_card_name" />
        </div>
        <div class="col-sm-3 col-6 mb-3">
          <label for="credit_card_month" class="form-label">Mes</label>
          <select class="form-control" id="credit_card_month" v-model="formData.credit_card_month">
            <option v-for="month in 12" :key="month" :value="month">{{ month }}</option>
          </select>
        </div>
        <div class="col-sm-3 col-6 mb-3">
          <label for="credit_card_year" class="form-label">Año</label>
          <select class="form-control" id="credit_card_year" v-model="formData.credit_card_year">
            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
        </div>
        <div class="col-sm-6 col-12 mb-3">
          <label for="credit_card_code" class="form-label">Código de verificación</label>
          <input type="text" class="form-control" id="credit_card_code" v-model="formData.credit_card_code" />
        </div>
      </div>


      <div class="col-12 mb-3">
        <button @click="saveForm" class="btn btn-primary me-2">Comprar</button>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import customersApi from '@/modules/customers/api/customersApi'
export default {
  created() {
    this.loadOperativeSystems()
    this.loadHostPlans()
    this.loadPaymentPlans()
  },
  data() {
    return {
      formData: {
        name: null,
        last_name: null,
        email: null,
        password: null,
        address: null,

        host_plan: null,
        operative_system: null,
        payment_plan: null,

        credit_card_number: null,
        credit_card_name: null,
        credit_card_month: null,
        credit_card_year: null,
        credit_card_code: null,
        amount: null,

      },
      years: this.getNextFiveYears(),
      cardIssuer: '', // Propiedad para almacenar el emisor de la tarjeta
    }
  },
  watch: {
    // Observadores para actualizar el total cuando cambian los planes seleccionados
    'formData.host_plan': function () {
      this.calculateTotal();
    },
    'formData.operative_system': function () {
      this.calculateTotal();
    },
    'formData.payment_plan': function () {
      this.calculateTotal();
    }
  },
  methods: {
    ...mapActions('customers', ['loadOperativeSystems', 'loadHostPlans', 'loadPaymentPlans']),
    // async saveForm() {
    //   await customersApi.createCustomer(this.formData);
    // },
    saveForm() {
      if (
        this.cardIssuer == 'Desconocido' || this.cardIssuer == ''
      ) {
        alert('Tarjeta inválida');
      }
      else if (
        this.formData.amount == null
      ) {
        alert('Precio inválido');
      }
      else {
        customersApi.createOrder(this.formData)
          .then(response => {
            // Aquí manejas la respuesta de la operación exitosa
            console.log('Cliente creado con éxito:', response);
            this.$router.push('/');
          })
          .catch(error => {
            // Aquí manejas los errores
            alert(error.response.data.message)
            console.error('Error al crear el cliente:', error.response.data.message);
          });
      }

    },
    getNextFiveYears() {
      const currentYear = new Date().getFullYear();
      return Array.from({ length: 10 }, (v, k) => currentYear + k);
    },
    getCardIssuer() {
      const number = this.formData.credit_card_number;
      customersApi.validateCreditCard(number)
        .then(response => {
          // Aquí manejas la respuesta de la operación exitosa
          this.cardIssuer = response.data.data;
          console.log('Tarjeta de crédito válida:', response);
        })
        .catch(error => {
          // Aquí manejas los errores
          this.cardIssuer = 'Desconocido';
          console.error('Tarjeta de crédito no válida:', error.response.data.message);
        });
    },
    calculateTotal() {
      const host_plan = this.formData.host_plan;
      const payment_plan = this.formData.payment_plan;
      const operative_system = this.formData.operative_system;
      customersApi.getAmount(host_plan, payment_plan, operative_system)
        .then(response => {
          // Aquí manejas la respuesta de la operación exitosa
          this.formData.amount = response.data.data;
          console.log('Total calculado con éxito:', response);
        })
        .catch(error => {
          // Aquí manejas los errores
          this.formData.amount = null;
          console.error('Total no calculado:', error.response.data.message);
        });
    }
  },
  computed: {
    ...mapGetters('customers', ['getOperativeSystems', 'getPaymentPlans', 'getHostPlans']),
  },
};
</script>
