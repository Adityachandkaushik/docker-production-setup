import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();
const app = express();

app.use(cors());            // allow all origins (simple for demo)
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);

const start = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI missing in env");
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected");
    const PORT = process.env.BACKEND_PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Backend running on ${PORT}`));
  } catch (err) {
    console.error("❌ Startup error:", err.message);
    process.exit(1);
  }
};

start();
