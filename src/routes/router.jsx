import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "../components/adminPages/AdminDashboard";
import AdminProductsPage from "../components/adminPages/AdminProductsPage";
import UserListPage from "../components/adminPages/UserListPage";
import Login from "../components/auth/Login";
import { AuthContext } from "../components/auth/authContext";
import ProductDetails from "../components/shared/ProductDetails";
import ProfilePage from "../components/shared/ProfilePage";
import ProductPage from "../components/userPages/ProductPage";
import UserDashboard from "../components/userPages/UserDashboard";

const AppRoutes = () => {
  const { isAuthenticated, userRole } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/user/*"
        element={
          isAuthenticated && userRole === "user" ? (
            <UserDashboard />
          ) : (
            <Navigate to="/" replace />
          )
        }
      >
        <Route path="products" element={<ProductPage />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route
        path="/admin/*"
        element={
          isAuthenticated && userRole === "admin" ? (
            <AdminDashboard />
          ) : (
            <Navigate to="/" replace />
          )
        }
      >
        {userRole === "admin" && (
          <>
            <Route path="products" element={<AdminProductsPage />} />
            <Route path="users" element={<UserListPage />} />
          </>
        )}
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
