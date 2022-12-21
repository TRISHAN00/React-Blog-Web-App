const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRouter);

app.use("/tri", (req, res) => {
  console.log("hey this is tri url");
});

app.listen(5000, () => {
  console.log(`Backend is running on port ${5000}`);
});
