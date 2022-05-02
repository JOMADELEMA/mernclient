import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../components/auth/useAuth";

const PrivateRoute = (props) => {
  const {isAuth, isRole} = useAuth();
  const {hasRole: role, children} = props;


  // console.log(props)
  // console.log(user.role)
  // console.log(children)

  if (role && !isRole(role)) return <Navigate to="/" />;
  if (!isAuth()) return <Navigate to="/login" />;
  return children;

  //   return <Route {...props} />;
};

export default PrivateRoute;
