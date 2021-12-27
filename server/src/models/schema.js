const mongoose = require("mongoose");
const validator = require("validator");

const mySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Mobile: {
    type: Number,
    unique: true,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new error("Invalied email ");
      }
    },
  },
  Password: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
});

const userData = new mongoose.model("userData", mySchema);

module.exports = userData;
