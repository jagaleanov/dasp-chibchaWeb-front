import { createStore } from 'vuex'
import auth from '../modules/auth/store'
import users from '../modules/users/store'
import customers from '../modules/customers/store'
import employees from '../modules/employees/store'

const store = createStore({
    modules: {
        users,
        customers,
        employees,
        auth
    }
})

export default store