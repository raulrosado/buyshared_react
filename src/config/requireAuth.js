import React, { useContext } from 'react';
import { useNavigate  } from "react-router-dom";

const RequireAuth = ({isLogged, children}) => {
    const navigate = useNavigate();
    if (!isLogged) {   
        return navigate('/login');
    }
    return children;
};
export default RequireAuth;