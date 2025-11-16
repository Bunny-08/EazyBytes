import "../admin/DashboardTable.css";

export default function DashboardTable({ rows = [] }) {
  return (
    <div className="table-card">
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td>{r.title}</td>
              <td>{r.status}</td>
              <td>{r.date}</td>
              <td>
                <button className="table-btn">Edit</button>
                <button className="table-btn ghost">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
