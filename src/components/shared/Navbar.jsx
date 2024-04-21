import { useContext } from "react";
import { AuthContext } from "../auth/authContext";

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <nav className=" bg-slate-700 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-white font-bold">Headphone Store</div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
