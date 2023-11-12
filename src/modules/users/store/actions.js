import usersApi from '@/modules/users/api/usersApi'

export const loadUsers = async ({ commit }) => {
    const { data } = await usersApi.loadUsers()
    const users = []
    if (data.status == "success") {
        for (let id of Object.keys(data.data)) {
            users.push({
                id,
                ...data.data[id]
            })
        }
        commit('setUsers', users)
    }
}

export const loadUser = async ({ commit }, id) => {
    const { data } = await usersApi.loadUser(id)
    if (data.status == "success") {
        const user = data.data
        commit('setUser', user)
    }
}

