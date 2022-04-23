import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteEmployee } from "../../redux/actions/EmployeeAction";
import './EmployeesTable.css'
function EmployeesTable({EmployeesData}) {
    let dispatch=useDispatch()
  const handeldelete =(id)=>{
    dispatch(DeleteEmployee(id));

  }
  
    return (
        <>
            <tr className="border-bottom ">
                <td className="col  ">
                    <div className="p-2 " > <span className="d-block font-weight-bold">{1}</span> </div>
                </td>
                <td  className="col ">
                    <div className="p-2 d-flex flex-row align-items-center mb-2"> 
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">{EmployeesData.UserName}</span></div>
                    </div>
                </td>
                <td  className="col ">
                    <div className="p-2"> <span className="font-weight-bold">{EmployeesData.group}</span> </div>
                </td>
               
                <td className="col h-100">
                    <div className=" row justify-content-between align-content-center  ">
                    
                      <Link to={'/EditEmployee/'+EmployeesData._id} className="col-12 d-flex col-md-4 justify-content-center text-center align-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" >
                      <i className="bi bi-pencil-square upicon"></i>
                      </Link> 
                      <i className="bi bi-trash-fill delicon  col-12  col-md-4 justify-content-center text-center align-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" onClick={()=>handeldelete(EmployeesData._id)}></i> 
                      </div>
                </td>
            </tr>    
   
        </>
    );
}

export default EmployeesTable;