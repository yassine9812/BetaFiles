const express = require("express");
const userController = require("./../controllers/userController");
const autController = require("./../controllers/autController");
const router = express.Router();

router.post("/signup", autController.signup);
router.post("/login", autController.login);

router.post("/forgotPassword", autController.forgotPassword);
router.patch("/resetPassword/:token", autController.resetPassword);

router.patch(
  "/updateMyPassword",
  autController.protect,
  autController.updatePassword
);

router.patch(
  "/updateMe",
  userController.uploadUserPhoto,
  autController.protect,
  userController.updateMe
);
router.delete("/deleteMe", autController.protect, userController.deleteMe);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
