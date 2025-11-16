import { db } from "./database.js";

async function createTables() {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS admin (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log("✅ Admin table created or already exists");
}

createTables()
  .then(() => console.log("✅ Database initialized successfully"))
  .catch((err) => console.error("❌ Database initialization failed:", err));
