import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { signIn } from "../../redux/actions/AuthAction";
import './Login.css';
function Login(props) {

    const auth = useSelector((state) => state.auth.authenticate);
    const dispatch = useDispatch();
    const history = useHistory();
    const [creds, setCreds] = useState({
        UserName: "",
        password: "",
    });

    const token = localStorage.getItem('token');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(creds));
       
        setCreds({ UserName: "", password: "" });
       
    };
    useEffect(() => {        
        if(token){
            history.push('/')
        }
        }, [token])
        
 var bool=true;
const forPassType =(e)=>{
    bool=!bool;
    if(!bool){
  
    e.target.className="bi bi-eye-fill eye position-absolute "
    document.getElementById("inputpass4").type='text'}
    else{
        e.target.className="bi bi-eye-slash-fill eye position-absolute "
        document.getElementById("inputpass4").type='password'
    }
}

    return (
        <>
             <div className="container p-0  d-flex flex-column justify-content-center ">
               
                <div className="col-12 d-flex justify-content-center my-5">
                    <div className="form bg-white rounded shadow">
                        <form className="row g-3 bg-white" onSubmit={handleSubmit}>
                            <div className="col-md-12">
                                <h4 className="fs-3">Sign-In</h4>
                                <label htmlFor="inputemail4" className="form-label fw-bold" style={{ fontSize: "13px" }}
                                >User Name </label>
                                <input type="text" className="form-control" id="inputemail4" 
                                value={creds.UserName}
                                onChange={(e) => setCreds({ ...creds, UserName: e.target.value })}/>
                            </div>
                            <div className="col-md-12 position-relative">
                                <label htmlFor="inputpass4" className="form-label fw-bold" style={{ fontSize: "13px" }}
                                >Password </label>
                                <input type="password" className="form-control " id="inputpass4" 
                                value={creds.password}
                                onChange={(e) => setCreds({ ...creds, password: e.target.value })}/>
                                <i className="bi bi-eye-slash-fill eye position-absolute " onClick={forPassType}></i>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btnn rounded-pill btn-info w-100" style={{ color: "black", fontSize: "14px" }}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Login;