const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
require("./DB/connection");

const PORT = process.env.PORT;

app.get("/", (_, res) => {
  res.send("hello server");
});

app.get("/application", (_, res) => {
  res.send("hello server");
});

app.listen(5001, () => {
  console.log(`Server running in port http://localhost:${PORT}`);
});
