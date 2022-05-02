import { useState, createContext } from "react";
import ROLES from '../../helpers/roles';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState(
  //   {
  //     id: 1, 
  //     role: ROLES.admin,
    
  //   }
  // );

  const login = (userCredentials) => setUser({id: 2, role: ROLES.admin});
  const logout = () =>setUser(null);

  const isAuth = () => !!user;
  const isRole = (role) => user?.role === role;
  
  console.log(isAuth())
  const contextValue = {
    user,
    isAuth,
    isRole, 
    login, 
    logout,
  };

  return <AuthContext.Provider value={contextValue}> {children}</AuthContext.Provider>;
}
