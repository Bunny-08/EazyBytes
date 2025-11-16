import "../admin/DashboardHeader.css";

export default function DashboardHeader({ onToggleTheme, currentTheme }) {
  return (
    <header className="admin-header">
      <div className="header-left">
        <h2>Dashboard</h2>
        <p className="header-sub">Manage your portfolio content</p>
      </div>

      <div className="header-right">
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          {currentTheme === "light" ? "Dark" : "Light"} mode
        </button>

        <div className="admin-pill">Admin</div>
      </div>
    </header>
  );
}
