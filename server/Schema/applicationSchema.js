const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const Form = mongoose.model("APPLICATION", formSchema);
module.exports = Form;
