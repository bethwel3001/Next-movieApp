import express from "express";
import connectDB from "./config/db";
import movieRoutes from "./routes/movieRoutes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/movies", movieRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
