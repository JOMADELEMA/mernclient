import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../components/auth/useAuth";

const PublicRoute = ({children}) => {
  const {user} = useAuth();
  
  if (user) return <Navigate to="/projects" />;
  return children;

};

export default PublicRoute;
