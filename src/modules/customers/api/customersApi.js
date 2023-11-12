import axios from 'axios'
import { SPA_CONFIG } from '@/config';

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
      PUT     customers/id
    */
    editCustomer: function (id, data) {
        return axios.put(`${SPA_CONFIG.API_URL}/customers/${id}`, data)
    },
}