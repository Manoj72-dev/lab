import express from "express";
import {attendance} from "../controllers/attendanceController.js";

const router = express.Router();

router.get("/", attendance);

export default router;