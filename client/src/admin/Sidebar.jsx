import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Admin</h2>

      <ul className="sidebar-links">
        <li><a href="/admin/dashboard">Dashboard</a></li>
        <li><a href="/admin/projects">Projects</a></li>
        <li><a href="/admin/messages">Messages</a></li>
        <li><a href="/admin/settings">Settings</a></li>
      </ul>
    </aside>
  );
}
