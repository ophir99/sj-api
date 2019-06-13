const Router = require("express").Router();
const jwt = require("jsonwebtoken");

const Posts = require("./../controllers/posts");
Router.use((req, res, next) => {
  try {
    jwt.verify(req.headers.authorization, "SUPERSECRET");
    next();
  } catch (err) {
    res.status(500).send({ msg: "Not a valid one" });
  }
});
Router.post("/new", Posts.newPost);
Router.get("/all", Posts.getAll);
// Router.delete("/delete/:id", Items.delete);
// Router.put("/update/:id", Items.update);

module.exports = Router;
