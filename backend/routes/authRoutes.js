import express from "express";
import { loginStudent } from "../controllers/authController.js";

const router = express.Router();

// Route: POST /api/auth/login
router.post("/login", loginStudent);

export default router;
