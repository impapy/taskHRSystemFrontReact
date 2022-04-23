import React from 'react';
import { useHistory } from 'react-router'
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from '../../redux/actions/AuthAction';

export default function Navebar(props) {
    const navigate = useHistory();
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(signOut());
        navigate.push('/login')
    };
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-light bg-secondary  ">
                <div className="container-fluid w-100">
                    <Link to={'/'}  className="navbar-brand">Dashboard</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/Employee'} className="nav-link active" aria-current="page" >Employees</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={'/Attendance'} className="nav-link active" aria-current="page" >Attendances</Link>
                            </li>
                            
                        </ul>
                    </div>
                    <button type="button" className="btn btn-danger float-end"  onClick={() => handleSignOut()}>LogOut</button>

                </div>
            </div>
        </>
    );
}

