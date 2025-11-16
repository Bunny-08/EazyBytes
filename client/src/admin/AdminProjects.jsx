import Sidebar from "../admin/Sidebar";
import "../admin/DashboardTable.css";
import "./AdminProjects.css";
import { useState } from "react";

export default function AdminProjects() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Portfolio Website", status: "Published", date: "2025-01-11" },
    { id: 2, title: "React CMS", status: "Draft", date: "2025-01-02" }
  ]);

  return (
    <div className="admin-projects-page">
      <Sidebar />

      <div className="admin-projects-content">
        <h1>Manage Projects</h1>

        <button className="add-project-btn">+ Add New Project</button>

        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Status</th>
              <th>Updated</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((p) => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>{p.status}</td>
                <td>{p.date}</td>
                <td>
                  <button className="table-btn">Edit</button>
                  <button className="table-btn ghost">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
