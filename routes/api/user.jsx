const { authJwt } = require("../../middlewares");
const router = require('express').Router()
const UserController = require('../../controllers/userController.jsx')

// Matches with "/api/user"
// router
//   .route('/')
//   .get(UserController.findAll)
//   .post(UserController.create)

// // Matches with "/api/user/:id"
// router
//   .route('/:id')
//   .get(UserController.findById)
//   .put(UserController.update)
//   .delete(UserController.remove)

router.get("/profile",
    [
      authJwt.verifyToken,
    ],
    UserController.getProfile);

module.exports = router
