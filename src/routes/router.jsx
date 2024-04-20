import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
