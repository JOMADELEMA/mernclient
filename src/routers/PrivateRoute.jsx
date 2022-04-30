import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../components/auth/useAuth";

const PrivateRoute = ({children}) => {
  const {user} = useAuth();
  
  if (!user) return <Navigate to="/login" />;
  return children;

  //   return <Route {...props} />;
};

export default PrivateRoute;
