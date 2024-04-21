import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "../components/adminPages/AdminDashboard";
import Login from "../components/auth/Login";
import { AuthContext } from "../components/auth/authContext";
import UserDashboard from "../components/userPages/UserDashboard";

const AppRoutes = () => {
  const { isAuthenticated, userRole } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/user"
        element={
          isAuthenticated && userRole === "user" ? (
            <UserDashboard />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/admin"
        element={
          isAuthenticated && userRole === "admin" ? (
            <AdminDashboard />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
