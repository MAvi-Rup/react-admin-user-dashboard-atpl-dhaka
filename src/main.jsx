import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import App from "./App";

import AuthProvider from "./components/auth/authContext";
import "./index.css";

const Navigate = ({ children }) => {
  const navigate = useNavigate();
  return <AuthProvider navigate={navigate}>{children}</AuthProvider>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navigate>
        <App />
      </Navigate>
    </Router>
  </React.StrictMode>
);
