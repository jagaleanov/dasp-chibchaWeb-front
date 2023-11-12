import axios from 'axios'
import { SPA_CONFIG } from '@/config';

export default {

    /*
      POST     customers
    */
      loginUser: function (data) {
        console.log("API LOGIN")
        return axios.post(`${SPA_CONFIG.API_URL}/login`, data)
    },
}