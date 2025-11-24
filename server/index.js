import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import adminRoutes from "./routes/admin.js";
import projectRoutes from "./routes/projects.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      process.env.FRONTEND_URL // add your deployed frontend URL here
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

app.get("/api", (_, res) => res.send("✅ Portfolio CMS Backend Running"));

export default app;
