import express from "express";
import {result} from "../controllers/resultController.js";
const router = express.Router();

router.get("/", result);

export default router;