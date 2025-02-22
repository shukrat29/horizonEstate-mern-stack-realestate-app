import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
dotenv.config();

// Db connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

// Server checking
app.get("/", (req, res) => {
  res.send("Hello from server");
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// Server Listen
app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});

// middleware to handle the error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
