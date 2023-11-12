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
        created_at: customer.created_at,
        updated_at: customer.updated_at,
    }
    state.customerIsLoading = false
}
