import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './EditEmployee.css'
import { GetSingleEmployee, UpdateEmployee } from '../../../redux/actions/EmployeeAction';
function EditEmployee(props) {
    const { employee } = useSelector(state => state.employees)


    const [state, setState] = useState({
        UserName: '',
        group: '',
        password: ''

    });


    const [error, setError] = useState("")
    let { id } = useParams();




    const { UserName, group, password } = state

    const handelInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };

    const dispatch = useDispatch();

    useEffect(() => {
          dispatch(GetSingleEmployee(id))
    }, [])

    useEffect(() => {
        if (employee) {
            setState({ ...employee })

        }
    }, [employee])

    const history = useHistory();

    const handelSubmet = (e) => {

        e.preventDefault();


        if (!UserName || !group) {
            setError("please input all input field")
        } else {

           dispatch(UpdateEmployee(state, id))
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
                            <h4 className="fs-3 fw-bold ">Edit User</h4>
                            {error && <h3 style={{ color: "red" }}>{error}</h3>}

                            <div className="col-md-12">
                                <label className="form-label fw-bold fs-5" >name </label>
                                <input type="text" className="form-control text-center" id="inputpassn" name="UserName"
                                    placeholder="name" value={UserName || "not found"} onChange={handelInputChange} />
                            </div>
                         
                            {/* <div className="col-md-12" hidden={group!="HR"}>
                                <label className="form-label fw-bold w-100  fs-5" >Password </label>
                                <input type="password" className="pass form-control text-center d-inline-block" id="inputpassp" name="password"
                                    placeholder="***" onChange={handelInputChange} />
                                <i className="bi bi-eye-slash-fill " onClick={forPassType}></i>
                            </div> */}


                            <div className="col-md-12">
                                <label className="form-label fw-bold fs-5" >group</label>
                                <select id="inputState" className="form-select " name="group" onChange={handelInputChange}>
                                    <option disabled>select</option>
                                    <option hidden={true} value=''>{group || 'HR'}</option>
                                    <option value="HR" >HR</option>
                                    <option value="Normal Employee">Normal Employee</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-success w-100 btn-btn" style={{ color: "black", fontSize: "14px" }}
                                >Edite</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>



         
        </>
    );
}

export default EditEmployee;