import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
import cors from 'cors'
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/todo",todoRoutes)

app.use(notFound);
app.use(errorHandler);

// Database Connection
connectDB();

app.get("/", (req, res) => res.send("Server is ready"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
