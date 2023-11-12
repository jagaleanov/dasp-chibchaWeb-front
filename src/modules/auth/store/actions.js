import customersApi from '@/modules/customers/api/customersApi'

export const loginUser = async ({ commit }, id) => {
    const { data } = await customersApi.loadCustomer(id)
    if (data.status == "success") {
        const user = data.data.user
        const token = data.data.token
        commit('loginUser', {user:user,idToken:token})
    }
}

