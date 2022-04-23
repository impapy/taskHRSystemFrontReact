import {
    Route,
    Redirect
} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
function PrivateRoute({ component:Component, ...rest }) {

  
    return (
        <Route {...rest} component={(props)=>{
            const token = localStorage.getItem('token');
            const user = localStorage.getItem('user');
          
           
            if(token){
              
                return <Component {...props}/>
            }else{
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
            }
        }}/>
    );
}

export default PrivateRoute;