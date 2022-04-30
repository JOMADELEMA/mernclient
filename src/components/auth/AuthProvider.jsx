import { useState, createContext } from "react";
import ROLES from '../../helpers/roles';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
  // const [user, setUser] = useState(true);
  const [user, setUser] = useState(
    {
      id: 1, 
      role: ROLES.regular,
    }
  );
  
  const contextValue = {
    user,
  };

  return <AuthContext.Provider value={contextValue}> {children}</AuthContext.Provider>;
}
