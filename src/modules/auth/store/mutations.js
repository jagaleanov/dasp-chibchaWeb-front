export const loginUser = (state, { user, token }) => {
    // state.customersAreLoading = true
    // state.customers = []
    // state.customers = [...state.customers, ...customers]
    // state.customersAreLoading = false
    state.status = 'authenticating'

    if (token && user) {
        localStorage.setItem('token',token)
        localStorage.setItem('user',user)
        state.token = token
        state.user = user
        state.status = 'authenticated'
    }else{
        state.status = 'unauthenticated'
    }

}
