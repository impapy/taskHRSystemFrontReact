import { axiosInstance } from '../../netWork/netWork'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// get all employees
export var total;
export const getEmployeesPaginationtList = (pag, data) => async (dispatch) => {
    try {
        const response = await axiosInstance.post(`/employee/pagination?page=${pag}`, data);

        total = response.data.pages;
        dispatch({
            type: "GET_EMPLOYEES_LIST_PAGE",
            payload: response.data.data
        });
    } catch (err) {
        toast.error(err.response?.data.data, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};

//Add employees

export const AddNormalEmployee = (data) => async (dispatch) => {
    try {

        const response = await axiosInstance.post('/employee/AddNEmployee', data);
        dispatch({
            type: "ADD_EMPLOYEE",
            payload: response.data,
        });
        toast.success(`${response.data[0].UserName} was added successfully`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } catch (err) {

        toast.error(err.response?.data, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};


export const AddHREmployee = (data) => async (dispatch) => {
    try {

        const response = await axiosInstance.post('/auth/signup', data);
        dispatch({
            type: "ADD_EMPLOYEE",
            payload: response.data[0],
        });
        toast.success(`${response.data[0].UserName} was HR added successfully`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } catch (err) {

        toast.error(err.response?.data, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};

//get employee
export const GetSingleEmployee = (id) => async (dispatch) => {
    try {

        const response = await axiosInstance.get(`/employee/${id}`);

        dispatch({
            type: "GET_SINGIL_EMPLOYEE",
            payload: response.data,
        });
    } catch (err) {
        toast.error(err.response?.data, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};

//update employee

export const UpdateEmployee = (data, id) => async (dispatch) => {
    try {
        const response = await axiosInstance.put(`/employee/${id}`, data);
        dispatch({
            type: "UPDATE_EMPLOYEE",
            payload: response.data,
        });
        toast.success(`${response.data.UserName} was updated successfully`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } catch (err) {

        toast.error(err.response?.data, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};

//delete employee

export const DeleteEmployee = (id) => async (dispatch) => {
    try {
    
      const response = await axiosInstance.delete(`/employee/${id}`);
      const res = await axiosInstance.get(`/employee`)

      dispatch({
        type: "DELET_EMPLOYEE",
        payload: res.data,
      });
      toast.success(`${response.data.UserName} was deleted successfully`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (err) {
     
        toast.error(err.response?.data, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
  };
  