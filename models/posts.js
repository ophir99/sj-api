const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  text: "string"
});

const model = mongoose.model("Post", itemsSchema);

module.exports = model;
