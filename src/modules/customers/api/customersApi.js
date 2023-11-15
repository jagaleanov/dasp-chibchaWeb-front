import axios from 'axios'
import store from '@/store';
import { SPA_CONFIG } from '@/config';

axios.interceptors.request.use(config => {
    const token = store.state.auth.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default {

    /*
      GET     customers
    */
    loadCustomers: function () {
        return axios.get(`${SPA_CONFIG.API_URL}/customers`)
    },

    /*
      GET     customers/id
    */
    loadCustomer: function (id) {
        return axios.get(`${SPA_CONFIG.API_URL}/customers/${id}`)
    },

    /*
      POST     customers
    */
    createCustomer: function (data) {
        return axios.post(`${SPA_CONFIG.API_URL}/customers`, data)
    },

    /*
      POST     orders
    */
    createOrder: function (data) {
        return axios.post(`${SPA_CONFIG.API_URL}/orders`, data)
    },

    /*
      PUT     customers/id
    */
    editCustomer: function (id, data) {
        return axios.put(`${SPA_CONFIG.API_URL}/customers/${id}`, data)
    },

    /*
      GET     operativeSystems
    */
    loadOperativeSystems: function () {
        return axios.get(`${SPA_CONFIG.API_URL}/operative-systems`)
    },

    /*
      GET     hostPlans
    */
    loadHostPlans: function () {
        return axios.get(`${SPA_CONFIG.API_URL}/host-plans`)
    },

    /*
      GET     paymentPlans
    */
    loadPaymentPlans: function () {
        return axios.get(`${SPA_CONFIG.API_URL}/payment-plans`)
    },

    /*
      GET     validateCreditCard
    */
    validateCreditCard: function (number) {
        return axios.get(`${SPA_CONFIG.API_URL}/credit-cards/${number}`)
    },

    /*
      GET     getAmount
    */
      getAmount: function (hosting_plan_id,operative_system_id,payment_plan_id) {
        return axios.get(`${SPA_CONFIG.API_URL}/orders/amount/${hosting_plan_id}/${operative_system_id}/${payment_plan_id}`)
    },
}