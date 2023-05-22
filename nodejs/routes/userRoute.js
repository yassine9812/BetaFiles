const express = require('express')
const userController = require('./../controllers/userController')
const autController = require('./../controllers/autController')
const router = express.Router()

router.post('/signup', autController.signup)
router.post('/login', autController.login)

router.post('/forgotPassword', autController.forgotPassword)
router.patch('/resetPassword/:token', autController.resetPassword)

router.patch(
  '/updateMyPassword',
  autController.protect,
  autController.updatePassword
)

router.patch(
  '/updateMe',
  userController.uploadUserPhoto,
  autController.protect,
  userController.updateMe
)
router.delete('/deleteMe', autController.protect, userController.deleteMe)

router
  .route('/')
  .get( autController.protect,userController.getUser)
  .get(userController.getAllUsers)
  .post(userController.createUser)

router
  .route('/:id')
  .patch(userController.updateUser)
  .delete(userController.deleteUser)

router.route('/generateCV').post( autController.protect,userController.generateCV)

module.exports = router
