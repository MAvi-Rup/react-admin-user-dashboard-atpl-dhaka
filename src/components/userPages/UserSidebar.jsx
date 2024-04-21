import { Link, useLocation } from "react-router-dom";

const UserSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-full bg-gray-800 h-screen">
      <div className="p-4">
        <h2 className="text-white font-bold mb-4">User Menu</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <Link
                to="products"
                className={`block py-2 px-4 rounded ${
                  location.pathname === "/products"
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="profile"
                className={`block py-2 px-4 rounded ${
                  location.pathname === "/profile"
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UserSidebar;
