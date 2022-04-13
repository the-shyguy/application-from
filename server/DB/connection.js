const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => console.log("Connection successful to mongoDB"))
  .catch((err) => console.log("MongoDB error: ", err));
