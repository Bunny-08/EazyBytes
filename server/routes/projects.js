import express from "express";
import { initDB } from "../db/database.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const db = await initDB();
    const projects = await db.all("SELECT * FROM projects");
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Error fetching projects" });
  }
});

router.post("/", auth, async (req, res) => {
  const { title, description, image, tech } = req.body;
  try {
    const db = await initDB();
    await db.run(
      "INSERT INTO projects (title, description, image, tech) VALUES (?, ?, ?, ?)",
      [title, description, image, tech]
    );
    res.json({ message: "✅ Project added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error adding project" });
  }
});

export default router;