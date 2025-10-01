import express from "express";
import starwarsRoutes from "./routes/starwarsRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDoc = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../swagger.json"), "utf-8")
);

const app = express();
app.use(express.json());

// Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Rotas
app.use("/auth", authRoutes);
app.use("/starwars", starwarsRoutes);

export default app;
