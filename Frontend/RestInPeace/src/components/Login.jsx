import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = ({ setIsAdmin }) => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const correctPassword = "admin123"; // Change this as needed

    if (password === correctPassword) {
      setIsAdmin(true);
      navigate("/admin/menu", { replace: true }); // ✅ Redirects to Admin Menu
    } else {
      alert("Incorrect password. Try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
