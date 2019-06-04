const user = require("./../models/users");
const jwt = require("jsonwebtoken");
exports.signUp = (req, res) => {
  const newUser = new user({
    email: req.body.email,
    password: req.body.password
  });

  newUser
    .save()
    .then(result => {
      res.send({ result });
    })
    .catch(err => {
      res.status(500).send({ err });
    });
};

exports.signIn = (req, res) => {
  const payload = {
    email: req.body.email,
    password: req.body.password
  };
  const token = jwt.sign(payload, "SUPERSECRET");
  user
    .find(payload)
    .then(result => {
      console.log(result);
      if (result.length > 0) {
        res.send({ msg: "UserFound..", token });
      } else {
        res.send({ msg: "User not found" });
      }
    })
    .catch(err =>
      res.status(500).send({ msg: "Something is wrong try again.." })
    );
};
