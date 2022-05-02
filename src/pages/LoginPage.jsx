import React from "react";
import useAuth from "../components/auth/useAuth";
import ROLES from "../helpers/roles";

function LoginPage() {
  const { login } = useAuth();

  const userCredentials = {}
  return (
    <>
      <div>LoginPage</div>
      <button onClick={() => login(userCredentials)}>Iniciar Sesión</button>
      {/* <button onClick={() => console.log(userCredentials)}>Iniciar Sesión</button> */}
    </>
  );
}

export default LoginPage;
