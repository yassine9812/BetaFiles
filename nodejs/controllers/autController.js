const { promisify } = require("util");
const crypto = require("crypto");
const User = require("../models/userModel");
const catchAsync = require("../utilities/catchAsync");
const jwt = require("jsonwebtoken");
const appError = require("../utilities/appError");
const sendEmail = require("../utilities/email");
const { log } = require("util");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    //EXPIRES IN 90DAYS
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    //CONVERT IT TO MILLISECONDS
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    //COOKIE CANNOT BE ACCESS IN ANYWAY BY THE BROWSER
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  res.cookie("jwt", token, cookieOptions);

  //REMOVE THE PASSWORD FROM POSTMAN OUTPOT
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  // const newUser = await User.create(req.body);
  //const newUser

  if (!req.body.email) {
    return next(new appError("Please add email", 400));
  }

  const foundUser = await User.findOne({
    email: req.body.email,
  });

  if (foundUser) {
    return next(new appError("Email already exists", 400));
  }

  let newUser = await User.create(req.body);
  createSendToken(newUser, 201, res);
  const token = signToken(newUser._id);
  //if const newUser then newUser.password=undefined is wrong khater new user is const and cant be changed
  newUser.password = undefined;
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  //CHEKING IF THE EMAIL AND PASSWORD EXIST
  if (!email || !password) {
    return next(new appError("Please provide email and password", 400));
  }
  // CHECKING IF THE USER EXISTS && PASSWORD  IS CORRECT
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new appError("Incorrect email or password ", 401));
  }

  //SENDING TOKEN TO CLIENT
  createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  //GET THE TOKEN AND CHECK IF IT EXISTS
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(
      new appError("you are not logged in ! please login to get access", 401)
    );
  }
  //VERIFICATION THE TOKEN
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  //CHECK IF THE USER STILL EXITST
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new appError("User not found", 401));
  }
  //CHECK IF USER CHANGED PASSWORD AFTER JWT WAS ISSUED
  if (currentUser.changedPasswordAfter(decoded.iat))
    return next(
      new appError("User changed his password after JWT was issued", 401)
    );
  //IF THERE IS NO PROBLEM THEN NEXT=>TO PROTECTED ROUTES
  req.user = currentUser;
  next();
});

//only the admin can delete from DB
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    //roles ['admin','lead-guide'...].role='user'
    if (!roles.includes(req.user.role)) {
      return next(
        new appError("you do not  have permission to perform this action", 403)
      );
    }
    console.log(req.body.role);
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("There is no user with email address.", 404));
  }

  // 2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  user.passwordResetToken = resetToken;
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password 
  and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore
   this email!`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token (valid for 10 min)",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("There was an error sending the email. Try again later!"),
      500
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  //GET THE USER BASE ON THE TOKEN
  const hashedToken = req.params.token;

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  //IF TOKEN HAS NOT EXPIRED AND THERE IS A USER  SET A NEW PASSWORD
  if (!user) {
    return next(new appError("Token is invalid or expired", 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  //UPDATE changedPassword  PROPERTY  FOR THE USER

  //LOG THE USER IN, SEND JWT
  createSendToken(user, 201, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  //Get user from collection
  const user = await User.findById(req.user.id).select("+password");

  //Check if POSTed current password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError("Your current password is wrong.", 401));
  }

  //If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  // User.findByIdAndUpdate will NOT work as intended!

  //Log user in, send JWT
  createSendToken(user, 200, res);
});
