import React from "react"
export const Dashboard = React.lazy(() => import('./../pages/Dashboard/Dashboard'))
export const Login = React.lazy(() => import ('./../pages/Login/Login'))
export const Employee = React.lazy(() => import ('./../pages/Employee/Employees/Employees'))
export const AddEmployee = React.lazy(() => import ('./../pages/Employee/AddEmployees/AddEmployee'))
export const EditEmployee = React.lazy(() => import ('./../pages/Employee/EditEmployees/EditEmployee'))
export const Attendance = React.lazy(() => import ('./../pages/Attendance/Attendance'))
