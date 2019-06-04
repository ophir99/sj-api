const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: "string",
    unique: true
  },
  password: "string"
});

const usermodel = mongoose.model("users", userSchema);

module.exports = usermodel;
