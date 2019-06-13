const posts = require("./../models/posts");

exports.newPost = (req, res) => {
  const newPost = new posts({
    text: req.body.post
  });

  newPost
    .save()
    .then(result => {
      res.send({ result });
    })
    .catch(err => res.status(500).send({ err }));
};

exports.getAll = (req, res) => {
  posts
    .find()
    .then(result => {
      res.send({ result });
    })
    .catch(err => res.status(500).send({ err }));
};

// exports.delete = (req, res) => {
//   items
//     .deleteOne({ _id: req.params.id })
//     .then(result => {
//       res.send({ result });
//     })
//     .catch(err => res.status(500).send({ err }));
// };

// exports.update = (req, res) => {
//   items
//     .update(
//       {
//         _id: req.params.id
//       },
//       {
//         $set: { name: req.body.name, type: req.body.type }
//       }
//     )
//     .then(result => {
//       res.send({ result });
//     })
//     .catch(err => res.status(500).send({ err }));
// };
