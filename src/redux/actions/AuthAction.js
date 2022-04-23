import { axiosInstance } from '../../netWork/netWork'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const signIn = (data)=> async(dispatch)=>{
    try{
        const res = await axiosInstance.post(`/auth/login`,data);
   
        dispatch({
            type: "SIGN_IN",
            payload:{
                token:res.data.token,
                user:res.data.user
            }
        });
        toast.success("Welcome ,...", {
                position: toast.POSITION.TOP_RIGHT,
            });
    }catch(err){
    
        toast.error(err.response?.data, {
            position: toast.POSITION.TOP_RIGHT,
        });          
         
    }
}

export const signOut = ()=> async(dispatch)=>{

    try{
        dispatch({
            type: "SIGN_OUT"
       
        });
    }catch(err){
    
    }
}