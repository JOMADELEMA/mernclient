import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../components/auth/useAuth";

const PrivateRoute = (props) => {
  const location = useLocation();
  // console.log(location);
  const {isAuth, isRole} = useAuth();
  const {hasRole: role, children} = props;


  if (role && !isRole(role)) return <Navigate to="/" />;
  if (!isAuth()) return <Navigate to={{pathname: "/login"}} state={{from: location}} />;
  return children;

  //   return <Route {...props} />;
};

export default PrivateRoute;
