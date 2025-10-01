import express from "express";
import { getCharacter } from "../controllers/starwarsController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.get("/character/:id", authMiddleware, getCharacter);

export default router;
