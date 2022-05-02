import { useState, createContext } from "react";
import ROLES from '../../helpers/roles';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
  // const [user, setUser] = useState(true);
  const [user, setUser] = useState(
    {
      id: 1, 
      role: ROLES.admin,
    }
  );

  // setUser(null)

  const isAuth = () => !!user;
  const isRole = (role) => user?.role === role;
  // const isAuth = false;

  // console.log(isAuth());
  
  const contextValue = {
    user,
    isAuth,
    isRole, 
  };

  return <AuthContext.Provider value={contextValue}> {children}</AuthContext.Provider>;
}
