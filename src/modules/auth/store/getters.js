export const getStatus = (state) => {
    return state.status
}
export const getUser = (state) => {
    return state.user
}
export const getRole = (state) => {
    // Comprueba si 'role' existe y si tiene una propiedad 'name'
    if (state.role && 'name' in state.role) {
        return state.role.name;
    }
    return 'public';
}

export const getToken = (state) => {
    return state.token
}