import { useContext, useState } from "react";
import avatarSvg from "../../assets/avatar.svg";
import { AuthContext } from "./authContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src={avatarSvg} alt="Avatar" className="w-14" />
        </div>
        <h2 className="text-lg font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="username"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-400 text-white py-2 px-4 rounded-md hover:bg-cyan-500 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
