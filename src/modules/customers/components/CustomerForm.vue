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
          <label for="hosting_plan" class="form-label">Plan</label>
          <!-- <input type="text" class="form-control" id="hosting_plan" v-model="formData.hosting_plan" /> -->
          <select class="form-control" id="hosting_plan" v-model="formData.hosting_plan">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="col-sm-6 col-12 mb-3">
          <label for="operative_system" class="form-label">Sistema operativo</label>
          <select class="form-control" id="operative_system" v-model="formData.operative_system">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="col-sm-6 col-12 mb-3">
          <label for="payment_plan" class="form-label">Plan de pagos</label>
          <select class="form-control" id="payment_plan" v-model="formData.payment_plan">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>

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
          <input type="number" class="form-control" id="credit_card_name" v-model="formData.credit_card_name" />
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
          <input type="number" class="form-control" id="credit_card_code" v-model="formData.credit_card_code" />
        </div>
      </div>


      <div class="col-12 mb-3">
        <button @click="saveForm" class="btn btn-primary me-2">Comprar</button>
      </div>
    </div>

  </div>
</template>

<script>
import { /*mapGetters,*/ mapActions/*, mapState*/ } from 'vuex'
import customersApi from '@/modules/customers/api/customersApi'
export default {
  created() {
    this.loadCustomers()
  },
  data() {
    return {
      formData: {
        name: null,
        last_name: null,
        email: null,
        password: null,
        address: null,

        hosting_plan: null,
        operative_system: null,
        payment_plan: null,

        credit_card_number: null,
        credit_card_name: null,
        credit_card_month: null,
        credit_card_year: null,
        credit_card_code: null,
      },
      years: this.getNextFiveYears(),
      cardIssuer: '', // Propiedad para almacenar el emisor de la tarjeta
    }
  },
  methods: {
    ...mapActions('customers', ['loadCustomers']),
    async saveForm() {
      await customersApi.createCustomer(this.formData);
    },
    getNextFiveYears() {
      const currentYear = new Date().getFullYear();
      return Array.from({ length: 10 }, (v, k) => currentYear + k);
    },
    getCardIssuer() {
      const number = this.formData.credit_card_number;
      if (number) {
        if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(number)) {
          this.cardIssuer = 'Visa';
        } else if (/^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/.test(number)) {
          this.cardIssuer = 'MasterCard';
        } else if (/^3[47]\d{13}$/.test(number)) {
          this.cardIssuer = 'American Express';
        } else if (/^6(011|5\d{2}|64[4-9]\d|62212[6-9]|6221[3-9]\d|622[2-8]\d{2}|6229[01]\d|62292[0-5])(\d{10})$/.test(number)) {
          this.cardIssuer = 'Discover';
        } else if (/^(352[89]|35[3-8]\d)\d{13}$/.test(number)) {
          this.cardIssuer = 'JCB';
        } else if (/^3(0[0-5]|[68])\d{11}$/.test(number)) {
          this.cardIssuer = 'Diners Club';
        } else {
          this.cardIssuer = 'Desconocido';
        }
      } else {
        this.cardIssuer = '';
      }
    }
  },
};
</script>
