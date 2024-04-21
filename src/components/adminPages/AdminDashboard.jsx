import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen grid grid-cols-6">
      <div className="col-span-1">
        <AdminSidebar />
      </div>
      <div className="col-span-5">
        <Navbar />
        <div className="p-6">
          <Outlet />
          <p className="text-2xl">This is Admin Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
