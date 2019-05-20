const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const items = require("./items");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/items", (req, res) => {
  res.send({ items });
});

app.post("/items", (req, res) => {
  items.push(req.body.item);
  console.log(req.body);
  res.send({ items });
});

app.listen(9090, () => {
  console.log("Api is running...");
});
