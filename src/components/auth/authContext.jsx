import { createContext, useState } from "react";
import userData from "../../data/data.json";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const login = (username, password) => {
    const user = [...userData.users, ...userData.admins].find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      setUserRole(user.role);
    } else {
      alert("Invalid username or password");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
