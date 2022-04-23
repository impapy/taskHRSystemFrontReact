
const initialize = {
    attendances: [],
    attendance: {},
};

export const AttendancesReducer = (state = initialize, action) => {
    switch (action.type) {

        
      
        case "GET_SINGIL_DAY":
            return {
                ...state,
                attendance: action.payload
            }
            case "ATTENDANCE_EMPLOYEE":
            return {
                ...state,
                attendance: action.payload
            }
      

        default:
            return state;
    }
};
