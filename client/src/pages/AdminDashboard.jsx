import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contact/all")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("❌ Failed to load messages:", err));
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2 className="sidebar-title">Dashboard</h2>

        <nav className="sidebar-nav">
          <a className="active">Overview</a>
          <a href="#projects">Projects</a>
          <a href="#messages">Messages</a>
        </nav>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>

        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </aside>

      <div className="main-content">
        <header className="admin-navbar">
          <h1>Portfolio CMS</h1>
          <p className="admin-user">
            Logged in as <b>Admin</b>
          </p>
        </header>

        <main className="dashboard-main">
          <div className="dashboard-header">
            <h2>Welcome back, Admin 👋</h2>
            <p>Manage your portfolio content and monitor stats below.</p>
          </div>

          <section className="stats-grid">
            <div className="stat-card">
              <h3>Total Projects</h3>
              <p className="stat-number">12</p>
              <span className="stat-subtext">2 new this month</span>
            </div>

            <div className="stat-card">
              <h3>Messages</h3>
              <p className="stat-number">{messages.length}</p>
              <span className="stat-subtext">
                {messages.length > 0
                  ? `${messages[0].name} messaged recently`
                  : "No messages yet"}
              </span>
            </div>

            <div className="stat-card">
              <h3>Pending Updates</h3>
              <p className="stat-number">2</p>
              <span className="stat-subtext">Review required</span>
            </div>

            <div className="stat-card">
              <h3>Theme</h3>
              <p className="stat-number">{theme === "light" ? "Light" : "Dark"}</p>
              <span className="stat-subtext">Customizable</span>
            </div>
          </section>

          <section className="recent-section" id="projects">
            <h2>Recent Projects</h2>
            <ul>
              <li>Portfolio Redesign – <span>Updated 3 days ago</span></li>
              <li>React Blog CMS – <span>Updated 1 week ago</span></li>
              <li>AI Interview Simulator – <span>New</span></li>
            </ul>
          </section>

          <section className="messages-section" id="messages">
            <h2>Messages</h2>
            <table className="messages-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {messages.length > 0 ? (
                  messages.map((msg) => (
                    <tr key={msg.id}>
                      <td>{msg.name}</td>
                      <td>{msg.email}</td>
                      <td>{msg.message}</td>
                      <td>{new Date(msg.created_at).toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: "center" }}>
                      No messages yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}
