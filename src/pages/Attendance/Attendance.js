import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AttendanceEmployee, GetSingleAttendancDay } from "../../redux/actions/AttendanceAction";
import './Attendance.css'
function Attendance(props) {

    const datatoday = localStorage.getItem('today');

    if (datatoday) {
        var today = datatoday
    } else {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        localStorage.setItem("today", today);

    }



    const [searchTerm, setSearchTerm] = useState('')
    const { attendance } = useSelector(state => state.attendances)

    const [state, setState] = useState({
        day: today,
    });

    const { day } = state

    const handelInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })

        localStorage.setItem("today", e.target.value);
    }
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(GetSingleAttendancDay(state));
    }, [state]);


    
    const handelattend =(id)=>{
      dispatch(AttendanceEmployee(state,id));
    }
    return (
        <>

            <div className="container ">

                <div className="row mb-3">
                    <div className="topnav__search col-6 ">
                        <input className=' w-50' type="text" placeholder='Search here...' onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }} />
                        <i className='bx bx-search'></i>
                    </div>

                    <div className="col-6  float-end" >
                        <input className='form-control w-50 topnav__search' type="date" id="start" name="day" onChange={handelInputChange}
                            value={day || ""}
                        ></input>

                    </div>

                </div>

                <div className="table-responsive container-fluid card">

                    <table className="table table-borderless  ">
                        <thead className="bg-table-th">
                            <tr className="border-bottom ">
                                <th className="th2"> <span className="ml-2 col">Name</span> </th>
                                <th className="th3"> <span className="ml-2 col">Group</span> </th>
                                <th className="th3"> <span className="ml-2 col">Attendance</span> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendance.Employees && attendance.Employees.filter((val) => {
                                if (searchTerm == "") {
                                    return val
                                } else if (val.EmployeeId.UserName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val
                                }
                            }).map((attendance, index) => {
                                return (
                                    <tr className="border-bottom ">

                                        <td className="col ">
                                            <div className="p-2 d-flex flex-row align-items-center mb-2">
                                                <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">{attendance.EmployeeId.UserName}</span></div>
                                            </div>
                                        </td>
                                        <td className="col ">
                                            <div className="p-2"> <span className="font-weight-bold">{attendance.EmployeeId.group}</span> </div>
                                        </td>

                                        <td className="col h-100">
                                            <div className=" row justify-content-between align-content-center  ">

                                                <i class="bi bi-check2-all fs-2 text-success" hidden={!attendance.IsAttendance}></i>
                                                <i class="bi bi-check2-square fs-2 text-danger upicon"
                                                 onClick={()=>handelattend(attendance.EmployeeId._id)} hidden={attendance.IsAttendance}></i>
                                                {/* <Link to={'/EditEmployee/'+EmployeesData._id} className="col-12 d-flex col-md-4 justify-content-center text-center align-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" >
                                          <i className="bi bi-pencil-square upicon"></i>
                                          </Link> 
                                          <i className="bi bi-trash-fill delicon  col-12  col-md-4 justify-content-center text-center align-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" onClick={()=>handeldelete(EmployeesData._id)}></i>  */}
                                            </div>
                                        </td>
                                    </tr>

                                );
                            })}

                        </tbody>
                    </table></div>
            </div>
        </>
    );
}

export default Attendance;