import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const user = true;
  if (!user) return <Navigate to="/login" />;
  return children;

  //   return <Route {...props} />;
};

export default PrivateRoute;
