
const initialize = {
    employees: [],
    employee: {},
};

export const employeesReducer = (state = initialize, action) => {
    switch (action.type) {

        case "GET_EMPLOYEES_LIST_PAGE":

            return {
                ...state,
                employees: action.payload
            }
        case "ADD_EMPLOYEE":
            state.employee.push(action.payload)
            return {
                ...state,
                employee: action.payload
            }
        case "GET_SINGIL_EMPLOYEE":
            return {
                ...state,
                employee: action.payload
            }
        case "UPDATE_EMPLOYEE":
            return {
                ...state

            }
        case "DELET_EMPLOYEE":
            return {
                ...state,
                employee: action.payload.Users
            }

        default:
            return state;
    }
};
