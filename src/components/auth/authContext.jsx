import { createContext, useState } from "react";

import userData from "../../data/data.json";
export const AuthContext = createContext();

const AuthProvider = ({ children, navigate }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userName, setUsername] = useState("");
  const [userPassword, setPassword] = useState("");

  const login = (username, password) => {
    const user = [...userData.users, ...userData.admins].find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      setUserRole(user.role);
      console.log(user.username);
      setUsername(user.username);
      setPassword(user.password);
      navigate(user.role === "admin" ? "/admin" : "/user");
    } else {
      alert("Invalid username or password");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userRole,
        login,
        logout,
        userName,
        userPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
