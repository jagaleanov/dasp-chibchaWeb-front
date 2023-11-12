import customersApi from '@/modules/customers/api/customersApi'

export const loadCustomers = async ({ commit }) => {
    const { data } = await customersApi.loadCustomers()
    const customers = []
    if (data.status == "success") {
        for (let id of Object.keys(data.data)) {
            customers.push({
                id,
                ...data.data[id]
            })
        }
        commit('setCustomers', customers)
    }
}

export const loadCustomer = async ({ commit }, id) => {
    const { data } = await customersApi.loadCustomer(id)
    if (data.status == "success") {
        const customer = data.data
        commit('setCustomer', customer)
    }
}

