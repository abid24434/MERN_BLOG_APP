import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const db_url = 'mongodb://localhost:27017/users';

mongoose
  .connect(db_url)
  .then(() => {
    console.log("Server is connected to Mongodb Databasse");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running n http://localhost:${port}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
