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

export const loadHostPlans = async ({ commit }) => {
    const { data } = await customersApi.loadHostPlans()
    const hostPlans = []
    if (data.status == "success") {
        for (let id of Object.keys(data.data)) {
            hostPlans.push({
                id,
                ...data.data[id]
            })
        }
        commit('setHostPlans', hostPlans)
    }
}

export const loadPaymentPlans = async ({ commit }) => {
    const { data } = await customersApi.loadPaymentPlans()
    const paymentPlans = []
    if (data.status == "success") {
        for (let id of Object.keys(data.data)) {
            paymentPlans.push({
                id,
                ...data.data[id]
            })
        }
        commit('setPaymentPlans', paymentPlans)
    }
}

export const loadOperativeSystems = async ({ commit }) => {
    const { data } = await customersApi.loadOperativeSystems()
    const operativeSystems = []
    if (data.status == "success") {
        for (let id of Object.keys(data.data)) {
            operativeSystems.push({
                id,
                ...data.data[id]
            })
        }
        commit('setOperativeSystems', operativeSystems)
    }
}

