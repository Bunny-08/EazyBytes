import React, { useEffect, useState } from "react";
import Sidebar from "../admin/Sidebar";
import "./Messages.css";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contact/all")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch(() => console.log("Error loading messages"));
  }, []);

  return (
    <div className="messages-page">
      <Sidebar />

      <div className="messages-content">
        <h1>Messages</h1>

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
              messages.map((m) => (
                <tr key={m.id}>
                  <td>{m.name}</td>
                  <td>{m.email}</td>
                  <td>{m.message}</td>
                  <td>{new Date(m.created_at).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No messages yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
