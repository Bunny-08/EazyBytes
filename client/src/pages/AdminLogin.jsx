import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import "./adminlogin.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Login successful");
        localStorage.setItem("token", data.token);
        setTimeout(() => navigate("/admin/dashboard"), 1000);
      } else {
        setMessage(data.message || "❌ Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Server connection error!");
    }
  };

  return (
    <div className="admin-login">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">Login</button>
      </form>
      <p className="register-link">
  Don’t have an account?{" "}
  <a href="/admin/register" className="link">Register here</a>
</p>

      {message && <p>{message}</p>}
    </div>
  );
}
