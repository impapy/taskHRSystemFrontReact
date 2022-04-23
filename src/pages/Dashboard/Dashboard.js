import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { GetSingleAttendancDay } from "../../redux/actions/AttendanceAction";

function Dashboard(props) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

const { attendance } = useSelector(state => state.attendances)

const [state, setState] = useState({
    day: today
});

const { day } = state

const dispatch = useDispatch();

let THR = attendance.Employees&&attendance.Employees.filter(T => T.EmployeeId.group=='HR').length;
let TNE = attendance.Employees&&attendance.Employees.filter(T => T.EmployeeId.group=='Normal Employee').length;

let THRAtt = attendance.Employees&&attendance.Employees.filter(T => (T.EmployeeId.group=='HR'&&T.IsAttendance)).length;
let TNEAtt = attendance.Employees&&attendance.Employees.filter(T => (T.EmployeeId.group=='Normal Employee'&&T.IsAttendance)).length;

console.log(attendance)

useEffect(() => {
    dispatch(GetSingleAttendancDay(state));
}, [state]);

    return (
        <>
             <div className='container'>
                <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">

                    <div className="col">
                        <div className="card border-danger mb-3 " >
                            <div className="card-header fs-4">HR</div>
                            <div className="card-body text-danger text-center">
                                <h5 className="card-title fs-2 fw-bold">{THR|"null"}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-warning  mb-3 " >
                            <div className="card-header fs-4">Normal Employees</div>
                            <div className="card-body text-danger text-center">
                                <h5 className="card-title fs-2 fw-bold">{TNE|'null'}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-info mb-3 " >
                            <div className="card-header">HR Attendance</div>
                            <div className="card-body text-danger text-center">
                                <h5 className="card-title fs-2 fw-bold">{THRAtt||'null'}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-success mb-3 " >
                            <div className="card-header">Normal Employees Attendance</div>
                            <div className="card-body text-danger text-center">
                                <h5 className="card-title fs-2 fw-bold">{TNEAtt||'null'}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Dashboard;