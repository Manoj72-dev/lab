import express from "express";
import cors from "cors";

import profileRoutes from "./routes/profileRoute.js";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoute.js";
import attendanceRoute from "./routes/attendanceRoute.js";
import assignmentRoute from "./routes/assignmentRoute.js";
import feesRoute from "./routes/feesRoute.js";
import resultRoute from "./routes/resultRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/attendance", attendanceRoute);
app.use("/api/assignment", assignmentRoute);
app.use("/api/fees", feesRoute);
app.use("/api/result", resultRoute);
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
