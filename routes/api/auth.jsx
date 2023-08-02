const { verifySignUp } = require("../../middlewares");
const controller = require("../../controllers/authController.jsx");
const router = require('express').Router();
router.post("/register",
    [
        verifySignUp.checkDuplicateEmail,
    ],
  controller.signup);

router.post("/login",controller.signin);


module.exports = router

