import React from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../components/auth/useAuth";

function LoginPage() {
  const { login } = useAuth();
  const location = useLocation();

  // console.log(location.state.from.pathname);
  const userCredentials = {}
  return (
    <>
      <div>LoginPage</div>
      <button onClick={() => login(userCredentials, location.state?.from)}>Iniciar Sesión</button>
    </>
  );
}

export default LoginPage;
