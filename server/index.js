import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import adminRoutes from "../routes/admin.js";
import projectRoutes from "../routes/projects.js";
import contactRoutes from "../routes/contact.js";
import serverless from "serverless-http";

dotenv.config();
const app = express();

app.use(cors({
  origin: "*",
  credentials: true
}));

app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

app.get("/api", (_, res) => {
  res.send("✅ Vercel Express Backend Running");
});

export const handler = serverless(app);
export default app;
