const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => console.log("Connection successful to mongoDB"))
  .catch((err) => console.log("MongoDB error: ", err));
