import React, { useContext } from 'react';
import AuthContext from '../Provider/AuthContext';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)

    if(loading){
        return <span className="loading loading-infinity loading-lg "></span>
    }
    if(!user){

        return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    }
   
    return children;
};

export default PrivateRoute;