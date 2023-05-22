const crypto = require('crypto')
//CRYPTO IS BUILD ON NODE MODULE
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    // required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  photo: String,
  role: {
    type: String,
    enum: ['user', 'guide', 'leade-guide', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    // required: true,
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    // required: true,
    validate: {
      //THIS ONLY WORK ON CREATING NEW USER
      validator: function (el) {
        return el === this.password
      },
      message: 'Password are not the same'
    }
  },
  passwordChangedAt: {
    type: Date
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  },
  generatedCVs: {
    type: Array,
    default: []
  }
})

userSchema.pre('save', async function (next) {
  //ONLY RUN THIS FUNCTION WHEN PASSWORD IS MODIFIED
  if (!this.isModified('password')) return next()
  //HASH THE PASSWORD WITH COST 12
  this.password = await bcrypt.hash(this.password, 12)
  //DELETE passwordConfirm FIELD
  this.passwordConfirm = undefined
  next()
})

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next()
  //putting passwordChangedAt 1 second in the past to make sure that the
  // token has created after the apssword has chnaged
  this.passwordChangetAt = Date.now() - 1000
  next()
})

userSchema.pre('/^find/', function (next) {
  //THIS POINTS TO CURRENT QUERRY
  this.find({ active: { $ne: false } })
  next()
})

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword)
}

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    //parseInt is integer and /1000 to took the miliseconds off
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    )
    return JWTTimestamp < changedTimestamp
  }
  //false means not change
  return false
}

userSchema.methods.createPasswordResetToken = function () {
  //32 IS NUMBER OF STRINGS AND CONVERTING IT TO HEXADECIMAL
  //*THIS TOKEN IS WHAT WE GONNA SEND TO USER
  //*RESET PASSWORD THAT USER CAN USE TO CREATE A REAL PASSWORD
  const resetToken = crypto.randomBytes(32).toString('hex')
  this.PasswordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex')

  console.log({ resetToken }, this.PasswordResetToken)
  //10  minutes 60 seconds  1000 milliseconds
  this.passwordResetExpires = Date.now() + 20 * 60 * 2000

  return resetToken

  //GENERATE THE RANDOM RESET PASSWORD
}

const User = mongoose.model('User', userSchema)
module.exports = User
