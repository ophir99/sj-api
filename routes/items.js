const Router = require("express").Router();
const Items = require("./../controllers/items");

Router.post("/new", Items.newItem);
Router.get("/all", Items.getAll);
Router.delete("/delete/:id", Items.delete);
Router.put("/update/:id", Items.update);

module.exports = Router;
