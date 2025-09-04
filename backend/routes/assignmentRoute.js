import express from "express";
import {assignment} from "../controllers/assignmentController.js";

const router = express.Router();
router.get("/",assignment);

export default router;