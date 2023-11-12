import axios from 'axios'
import { SPA_CONFIG } from '@/config';

export default {

    /*
      GET     employees
    */
    loadEmployees: function () {
        return axios.get(`${SPA_CONFIG.API_URL}/employees`)
    },

    /*
      GET     employees/id
    */
    loadEmployee: function (id) {
        return axios.get(`${SPA_CONFIG.API_URL}/employees/${id}`)
    },

    /*
      POST     employees
    */
    createEmployee: function (data) {
        return axios.post(`${SPA_CONFIG.API_URL}/employees`, data)
    },

    /*
      PUT     employees/id
    */
    editEmployee: function (id, data) {
        return axios.put(`${SPA_CONFIG.API_URL}/employees/${id}`, data)
    },
}