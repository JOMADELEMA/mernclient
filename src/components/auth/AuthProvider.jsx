import { useState, createContext } from "react";
// import ROLES from "../../helpers/roles";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const AuthContext = createContext();

const url = "http://localhost:3100/auth/login";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const login = async (userCredentials, fromLocation) => {
    console.log("credenciales enviadas al login");
    console.log(userCredentials);

    try {
      await axios.post(url,{
        id_usuario: userCredentials.id_usuario,
        contrasena: userCredentials.contrasena,
      }).then((respuesta)=>{
        setUser({
          name: respuesta.data.data.id_usuario,
          role: "admin",
        });
      })
    } catch (error){
      console.log(error)
    }
    if (fromLocation){
      navigate(fromLocation);
    }
    console.log("El usuario es:")
    console.log(user);
  }

  // const login = (userCredentials, fromLocation) => {
  //   console.log(fromLocation);
  //   setUser({ id_usuario: userCredentials.id_usuario, role: "admin"});
  //   if (fromLocation) {
  //     navigate(fromLocation);
  //   }
  // };

  
  // const login = (userCredentials, fromLocation) => {
  //   console.log(fromLocation);
  //   setUser({ id: 2, name: "JOMA", email: "jomadelema@ejemplo.com",role: ROLES.admin });
  //   if (fromLocation) {
  //     navigate(fromLocation);
  //   }
  // };


  const logout = () => setUser(null);

  const isAuth = () => !!user;
  const isRole = (role) => user?.role === role;

  // console.log(isAuth())
  const contextValue = {
    user,
    isAuth,
    isRole,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
