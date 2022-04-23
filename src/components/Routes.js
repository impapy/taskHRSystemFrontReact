import React, { Suspense } from 'react'

import { Route, Switch } from 'react-router-dom'

// import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login/Login'
import Navbar from './Navbar/Navebar'
import PrivateRoute from './PrivateRoute'
import Employee from '../pages/Employee/Employees/Employees'
import AddEmployee from '../pages/Employee/AddEmployees/AddEmployee'
import EditEmployee from '../pages/Employee/EditEmployees/EditEmployee'
import Attendance from '../pages/Attendance/Attendance'
import Dashboard from '../pages/Dashboard/Dashboard'





const Routes = () => {
    const token = localStorage.getItem('token');


    return (
        <>

            <Suspense fallback="....Loading">

                <Switch>
                    <Route path='/login' exact component={Login} />

                    <Route render={(props) => (
                        <div className="layout__content-main">
                            <Navbar />
                            <PrivateRoute path='/' exact component={Dashboard} />
                            <PrivateRoute path='/Employee' exact component={Employee} />
                            <PrivateRoute path='/AddEmployee' exact component={AddEmployee} />
                            <PrivateRoute path='/EditEmployee/:id' exact component={EditEmployee} />
                            <PrivateRoute path='/Attendance' exact component={Attendance} />


                        </div>
                    )} />

                </Switch>
            </Suspense>

        </>
    )
}

export default Routes
