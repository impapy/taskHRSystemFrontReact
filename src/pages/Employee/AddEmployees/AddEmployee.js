import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddEmployee.css'
import { AddHREmployee, AddNormalEmployee } from '../../../redux/actions/EmployeeAction';
function AddEmployee(props) {

    const [state, setState] = useState({
        UserName: '',
        group: '',
        password: ''
    });

    const [error, setError] = useState("")

    const { UserName, group, password } = state

    const handelInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };

    const dispatch = useDispatch();
    const history = useHistory();

    var bool = true;
    const forPassType = (e) => {
        bool = !bool;
        if (!bool) {

            e.target.className = "bi bi-eye-fill  "
            document.getElementById("inputpassp").type = 'text'
        }
        else {
            e.target.className = "bi bi-eye-slash-fill   "
            document.getElementById("inputpassp").type = 'password'
        }
    }

    const handelSubmet = (e) => {
        e.preventDefault();
        if (!UserName || !group) {
            setError("please enter values in fields")
        } else {
          if(group==="HR"){
            dispatch(AddHREmployee(state))
          }else{
            dispatch(AddNormalEmployee(state))
          }
            
            setError("")
            history.push("/Employee")
        }
    }

    return (
        <>
            <div className="container p-0  d-flex flex-column justify-content-center mt-5">

                <div className="col-12 d-flex justify-content-center ">
                    <div className="form bg-white">
                        <form className="row g-3" onSubmit={handelSubmet}>
                            <h4 className="fs-3 fw-bold ">Add Employee</h4>
                            {error && <h3 style={{ color: "red" }}>{error}</h3>}

                            <div className="col-md-12">
                                <label className="form-label fw-bold fs-5" >name </label>
                                <input type="text" className="form-control text-center" id="inputpassn" name="UserName"
                                    placeholder="name" value={UserName} onChange={handelInputChange} />
                            </div>

                            <div className="col-md-12" hidden={group!="HR"}>
                                <label className="form-label fw-bold w-100  fs-5" >Password </label>
                                <input type="password" className="pass form-control text-center d-inline-block" id="inputpassp" name="password"
                                    placeholder="***" value={password} onChange={handelInputChange} />
                                <i className="bi bi-eye-slash-fill " onClick={forPassType}></i>
                            </div>
                         
                            <div className="col-md-12">
                                <label className="form-label fw-bold fs-5" >group</label>
                                <select id="inputState" className="form-select " name="group" onChange={handelInputChange}>
                                    <option disabled>select</option>
                                    <option hidden={true} value=''>select...</option>
                                    <option value="HR">HR</option>
                                    <option value="Normal Employee">Normal Employee</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-success w-100 btn-btn" style={{ color: "black", fontSize: "14px" }}
                                >Add</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </>
    );
}

export default AddEmployee;