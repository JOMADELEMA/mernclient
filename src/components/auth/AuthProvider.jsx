import { useState, createContext } from "react";
import ROLES from "../../helpers/roles";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const login = (userCredentials, fromLocation) => {
    console.log(fromLocation);
    setUser({ id: 2, name: "JOMA", email: "jomadelema@ejemplo.com",role: ROLES.admin });
    if (fromLocation) {
      navigate(fromLocation);
    }
  };
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
