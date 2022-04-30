import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../components/auth/useAuth";

const PrivateRoute = (props) => {
  const {user} = useAuth();
  const {hasRole: role, children} = props;


  console.log(props)
  console.log(user.role)
  // console.log(children)

  if (role && user?.role !== role ) return <Navigate to="/" />;
  if (!user) return <Navigate to="/login" />;
  return children;

  //   return <Route {...props} />;
};

export default PrivateRoute;
