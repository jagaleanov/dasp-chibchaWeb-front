import axios from 'axios'
import { SPA_CONFIG } from '@/config';

export default {

    /*
      POST     auth
    */
    login: function (data) {
        return axios.post(`${SPA_CONFIG.API_URL}/login`, data)
    },

}