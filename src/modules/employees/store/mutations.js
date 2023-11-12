export const setEmployees = (state, employees) => {
    state.employeesAreLoading = true
    state.employees = []
    state.employees = [...state.employees, ...employees]
    state.employeesAreLoading = false
}

export const setEmployee = (state, employee) => {
    state.employeeIsLoading = true
    state.employee = {
        id: employee.id,
        name: employee.name,
        last_name: employee.last_name,
        email: employee.email,
        password: employee.password,
        created_at: employee.created_at,
        updated_at: employee.updated_at,
    }
    state.employeeIsLoading = false
}
