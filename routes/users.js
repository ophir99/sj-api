const Router = require("express").Router();
const user = require("./../controllers/users");
Router.post("/signup", user.signUp);
Router.post("/signin", user.signIn);

module.exports = Router;
