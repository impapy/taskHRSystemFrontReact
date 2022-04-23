import { axiosInstance } from '../../netWork/netWork'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GetSingleAttendancDay = (day) => async (dispatch) => {
    try {

        const response = await axiosInstance.post(`/attendance/NewDay`,day);
        const res = await axiosInstance.post(`/attendance`,day);

        dispatch({
            type: "GET_SINGIL_DAY",
            payload: res.data,
        });
    } catch (err) {
        toast.error(err.response?.data, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};

export const AttendanceEmployee = (data, id) => async (dispatch) => {
    try {
        const response = await axiosInstance.put(`/attendance/EmployeeAtt/${id}`, data);
        const res = await axiosInstance.post(`/attendance`,data);
      
        dispatch({
            type: "ATTENDANCE_EMPLOYEE",
            payload: res.data,
        });
        toast.success(` Attended successfully`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } catch (err) {

        toast.error(err.response?.data, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};
