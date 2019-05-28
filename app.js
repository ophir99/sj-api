const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const items = require("./routes/items");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log("DB ERR", err));

app.use(cors());
app.use(express.json());
app.use("/items", items);
app.listen(9090, () => {
  console.log("Api is running...");
});
