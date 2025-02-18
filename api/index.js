import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/authRoute.js";
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

// Server checking
app.get("/", (req, res) => {
  res.send("Hello from server");
});

// Routes
app.use("/api/auth", authRouter);

// Server Listen
app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});
