import customersApi from '@/modules/auth/api/authApi'

export const loginUser = ({ commit }, user) => {
    customersApi.loginUser(user)
        .then(response => {
            const data = response.data;

            if (data.status == "success") {
                // console.log('OK')
                // console.log(data.data.user.email)
                const user = data.data.user
                const role = data.data.role
                const token = data.data.token
                commit('loginUser', {
                    user: {
                        id: user.id,
                        name: user.name,
                        last_name: user.last_name,
                        email: user.email,
                        role_id: user.role_id,
                    },
                    role: {
                        id: role.id,
                        name: role.name,
                    },
                    token: token
                })
            }
        })
        .catch(error => {
            // Manejar el error
            console.error("Error al iniciar sesión:", error);
        });
}


export const initializeAuth = async ({ commit }) => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const role = localStorage.getItem('role');
    if (token && user && role) {

        commit('loginUser', { user: JSON.parse(user), role: JSON.parse(role), token: token });
    }
};