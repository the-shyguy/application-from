const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
require("./DB/connection");

const Form = require("./Schema/applicationSchema");

app.use(express.json());

const PORT = process.env.PORT;

app.post("/", (req, res) => {
  const { fullName, category, email, phone, address, gender } = req.body;
  if (!fullName || !category || !email || !phone || !address || !gender) {
    return res.status(422).json({ message: "Please fill the field properly" });
  }
  Form.findOne({
    email: email,
    fullName: fullName,
    phone: phone,
  })
    .then((formExist) => {
      if (formExist) {
        return res.status(422).json({ error: "Application already exists" });
      }
      const form = new Form({
        fullName,
        category,
        email,
        phone,
        address,
        gender,
      });

      form
        .save()
        .then(() => {
          res.status(201).json({
            message: "Application registered successfully",
          });
        })
        .catch((err) =>
          res.status(500).json({ error: "Failed to register application" })
        );
    })
    .catch((err) => {
      console.log(err);
    });
});
// app.get("/application", (_, res) => {
//   res.send("hello server");
// });

app.listen(5001, () => {
  console.log(`Server running in port http://localhost:${PORT}`);
});
