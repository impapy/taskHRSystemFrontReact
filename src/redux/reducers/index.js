
import { combineReducers } from "redux";
import { AttendancesReducer } from "./AttendanceReducer";
import authReducer from './AuthReducer';
import { employeesReducer } from "./EmployeeReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    employees:employeesReducer,
    attendances:AttendancesReducer
})

export default rootReducer