export const setCustomers = (state, customers) => {
    state.customersAreLoading = true
    state.customers = []
    state.customers = [...state.customers, ...customers]
    state.customersAreLoading = false
}

export const setCustomer = (state, customer) => {
    state.customerIsLoading = true
    state.customer = {
        id: customer.id,
        name: customer.name,
        last_name: customer.last_name,
        email: customer.email,
        password: customer.password,
        address: customer.address,
        created_at: customer.created_at,
        updated_at: customer.updated_at,
    }
    state.customerIsLoading = false
}

export const setHostPlans = (state, hostPlans) => {
    state.hostPlans = [...state.hostPlans, ...hostPlans]
}

export const setOperativeSystems = (state, operativeSystems) => {
    state.operativeSystems = [...state.operativeSystems, ...operativeSystems]
}

export const setPaymentPlans = (state, paymentPlans) => {
    state.paymentPlans = [...state.paymentPlans, ...paymentPlans]
}
