const db = require('../models/index.jsx')

// // Defining methods for the userController
// module.exports = {
//   // Get all Users
//   findAll: function (req, res) {
//     db.User.find(req.query)
//       .sort({ date: -1 })
//       .then(UserDb => res.json(UserDb))
//       .catch(err => res.status(400).json(err))
//   },
//   // Get specfic User by Id
//   findById: function (req, res) {
//     db.User.findById(req.params.id)
//       .then(UserDb => res.json(UserDb))
//       .catch(err => res.status(400).json(err))
//   },
//   // Create New User
//   create: function (req, res) {
//     db.User.create(req.body)
//       .then(UserDb => res.json(UserDb))
//       .catch(err => res.status(400).json(err))
//   },
//   // Update an existing user
//   update: function (req, res) {
//     db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(UserDb => res.json(UserDb))
//       .catch(err => res.status(400).json(err))
//   },
//   // Delete User
//   remove: function (req, res) {
//     db.User.findById({ _id: req.params.id })
//       .then(UserDb => UserDb.remove())
//       .then(UserDb => res.json(UserDb))
//       .catch(err => res.status(400).json(err))
//   }
// }
exports.getProfile = (req, res) => {
  console.log(req.body.id);
  User.findOne({
      id: req.body.id
    })
      .exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        if (!user) {
          return res.status(404).send({ message: "User is not valid!" });
        }
        res.status(200).send(user);
      });
  // res.status(200).send("User Content.");
};
