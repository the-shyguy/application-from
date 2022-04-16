const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
require("./DB/connection");

const Form = require("./Schema/applicationSchema");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.post("/", async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const { fullName, DOB, category, email, phone, address, gender } = req.body;

  if (
    !fullName ||
    !category ||
    !email ||
    !phone ||
    !address ||
    !gender ||
    !DOB
  ) {
    return res.status(422).json({ message: "Please fill the field properly" });
  }

  try {
    const formExist = await Form.findOne({
      email: email,
      fullName: fullName,
      phone: phone,
    });
    if (formExist) {
      return res.status(422).json({ message: "Application already exists" });
    }

    const form = new Form({
      fullName,
      DOB,
      category,
      email,
      phone,
      address,
      gender,
    });

    const formRegister = await form.save();
    if (formRegister) {
      res.status(201).json({
        message: "Application registered successfully",
      });
    } else {
      res.status(500).json({ message: "Failed to register application" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/application", async (req, res) => {
  // res.send("hello server");
  const application = await Form.find({});
  if (application) {
    res.json(application);
  } else {
    res.status(404).json({ message: "Error" });
  }
  // console.log(application[application.length - 1]);
});

app.listen(5001, () => {
  console.log(`Server running in port http://localhost:${PORT}`);
});
