const User = require("../models/userModel");
const appError = require("../utilities/appError");
const catchAsync = require("../utilities/catchAsync");
const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img/users");
  },
  filename: (req, file, cb) => {
    // console.log(file);
    const ext = file.originalname.split(".")[1];
    cb(null, `user-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new appError("not an image! please upload one", 400), flase);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

// const upload = multer({ dest: "public/img/users" });

exports.uploadUserPhoto = upload.single("photo");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  //SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  //CREATE ERROR IF USER POSTs PASSWORD DATA
  if (req.body.password || req.body.passwordComfirm) {
    return next(
      new appError(
        "this  route is not for password update please use /updateMyPassword",
        400
      )
    );
  }
  //FILTER OUT  UNWANTED FIELDS NAMES THAT ARE NOT ALLOWED TO BE UPDATED
  const filteredBody = filterObj(req.body, "name", "email");
  //UPDATE USER DOCUMENT
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined",
  });
};
