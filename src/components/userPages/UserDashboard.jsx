import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import UserSidebar from "./UserSidebar";

const UserDashboard = () => {
  return (
    <div className="min-h-screen grid grid-cols-6">
      <div className="grid-cols-1">
        <UserSidebar />
      </div>
      <div className="col-span-5">
        <Navbar />
        <div className="p-6">
          <Outlet />
          <p className=" text-2xl">This is User Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
