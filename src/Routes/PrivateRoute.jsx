import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

 

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext );
    const location = useLocation();

if(loading){
    return <div className="flex justify-center mt-16 mb-16">
        <button className="btn loading ">loading</button>
    </div>
} 

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}}  replace ></Navigate>
};

export default PrivateRoute;