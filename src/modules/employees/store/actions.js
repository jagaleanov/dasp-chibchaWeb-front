import employeesApi from '@/modules/employees/api/employeesApi'

export const loadEmployees = async ({ commit }) => {
    const { data } = await employeesApi.loadEmployees()
    const employees = []
    if (data.status == "success") {
        for (let id of Object.keys(data.data)) {
            employees.push({
                id,
                ...data.data[id]
            })
        }
        commit('setEmployees', employees)
    }
}

export const loadEmployee = async ({ commit }, id) => {
    const { data } = await employeesApi.loadEmployee(id)
    if (data.status == "success") {
        const employee = data.data
        commit('setEmployee', employee)
    }
}

export const loadRoles = async ({ commit }) => {
    const { data } = await employeesApi.loadRoles()
    const roles = []
    if (data.status == "success") {
        for (let id of Object.keys(data.data)) {
            roles.push({
                id,
                ...data.data[id]
            })
        }
        commit('setRoles', roles)
    }
}

