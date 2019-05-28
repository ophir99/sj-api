const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  name: "string",
  type: "string"
});

const model = mongoose.model("Items", itemsSchema);

module.exports = model;
