import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../db/database.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "secret123";

router.get("/seed", async (_, res) => {
  try {
    const db = await initDB();
    const hashed = await bcrypt.hash("admin123", 10);
    await db.run(
      "INSERT OR IGNORE INTO admin (email, password) VALUES (?, ?)",
      ["admin@example.com", hashed]
    );
    res.json({
      message: "✅ Default admin created",
      credentials: { email: "admin@example.com", password: "admin123" }
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to seed admin" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.get("SELECT * FROM admin WHERE email = ?", email);
    if (!user) return res.status(404).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "✅ Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const existing = await db.get("SELECT * FROM admin WHERE email = ?", [email]);
  if (existing) {
    return res.status(400).json({ error: "Email already registered" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.run(
    "INSERT INTO admin (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );

  res.json({ message: "✅ Admin registered successfully!" });
});


export default router;