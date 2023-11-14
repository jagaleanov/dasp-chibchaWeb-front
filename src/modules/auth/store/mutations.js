export const loginUser = (state, { user, role, token }) => {
    state.status = 'authenticating'

    if (user && role && token) {
        console.log('user',user);
        console.log('role',role);
        console.log('token',token);
        localStorage.setItem('token',token)
        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('role',JSON.stringify(role))
        state.token = token
        state.user = user
        state.role = role
        state.status = 'authenticated'
    }else{
        state.status = 'unauthenticated'
    }

}
