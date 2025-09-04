import express from "express";
import {fees } from "../controllers/feesController.js";

const router = express.Router();

router.get("/", fees);

export default router;