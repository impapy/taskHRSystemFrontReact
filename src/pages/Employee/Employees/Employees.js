import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { total, getEmployeesPaginationtList } from './../../../redux/actions/EmployeeAction';
import Pagination from "../../../components/Pagination/Pagination";
import EmployeesTable from "../../../components/EmployeesTable/EmployeesTable";
import './Employees.css'

function Employees(props) {



    const [searchTerm, setSearchTerm] = useState('')

    const { employees } = useSelector(state => state.employees)

    const { num } = useParams() || 1;
    const [page, setPage] = useState(num);
    const pages = total || 1;
    const [state, setState] = useState({
        group: "",
    });

    const { status } = state

    const handelStatusChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getEmployeesPaginationtList(page, state));
    }, [page, state]);



    return (
        <>
            <div className="container ">

                <div className="col-6">
                    <div className=" container my-4 ">
                        <Link to="/AddEmployee">
                            <button className="btn btn-success ">New Employee</button>
                        </Link>
                    </div>

                </div>

                <div className="row mb-3">
                    <div className="topnav__search col-6 ">
                        <input type="text" placeholder='Search here...' onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }} />
                        <i className='bx bx-search'></i>
                    </div>
                    <div className="col-6  float-end" >

                        <select placeholder="select " className="form-control w-100 topnav__search " name="group" onChange={handelStatusChange}>
                            <option hidden={true} value=''>select...</option>
                            <option value=''>all</option>
                            <option value='HR'>HR</option>
                            <option value='Normal Employee'>Normal Employee</option>
                        </select>
                    </div>

                </div>

                <div className="table-responsive container-fluid card">

                    <table className="table table-borderless  ">
                        <thead className="bg-table-th">
                            <tr className="border-bottom ">
                                <th className="th1"> <span className="col">#</span> </th>
                                <th className="th2"> <span className="ml-2 col">Name</span> </th>
                                <th className="th3"> <span className="ml-2 col">Group</span> </th>
                                <th className="th3"> <span className="ml-2 col">Actions</span> </th>
                            </tr>
                        </thead>
                        <tbody>

                            {employees && employees.filter((val) => {
                                if (searchTerm == "") {
                                    return val
                                } else if (val.UserName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val
                                }
                            }).map((employees, index) => {
                                return (
                                    <EmployeesTable keye={index} EmployeesData={employees} />
                                );
                            })}


                        </tbody>
                    </table></div>
            </div>
            <Pagination page={page || 1} pages={pages} changePage={setPage} />


        </>
    );
}

export default Employees;