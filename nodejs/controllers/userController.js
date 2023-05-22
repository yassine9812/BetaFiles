const User = require('../models/userModel')
const appError = require('../utilities/appError')
const catchAsync = require('../utilities/catchAsync')
const multer = require('multer')

var pdf = require('pdf-creator-node')
var fs = require('fs')

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/users')
  },
  filename: (req, file, cb) => {
    // console.log(file);
    const ext = file.originalname.split('.')[1]
    cb(null, `user-${Date.now()}.${ext}`)
  }
})

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true)
  } else {
    cb(new appError('not an image! please upload one', 400), flase)
  }
}

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
})

// const upload = multer({ dest: "public/img/users" });

exports.uploadUserPhoto = upload.single('photo')

const filterObj = (obj, ...allowedFields) => {
  const newObj = {}
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el]
  })
  return newObj
}

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find()
  //SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  })
})

exports.updateMe = catchAsync(async (req, res, next) => {
  console.log(req.file)
  console.log(req.body)
  //CREATE ERROR IF USER POSTs PASSWORD DATA
  if (req.body.password || req.body.passwordComfirm) {
    return next(
      new appError(
        'this  route is not for password update please use /updateMyPassword',
        400
      )
    )
  }
  //FILTER OUT  UNWANTED FIELDS NAMES THAT ARE NOT ALLOWED TO BE UPDATED
  const filteredBody = filterObj(req.body, 'name', 'email')
  //UPDATE USER DOCUMENT
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  })

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  })
})

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false })

  res.status(204).json({
    status: 'success',
    data: null
  })
})

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req?.user?.id)
  if(!user){
    return next(new appError('no user found with that id', 404))
  }
  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  })
})

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined'
  })
}

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined'
  })
}

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined'
  })
}

exports.generateCV = catchAsync(async (req, res, next) => {
  var html = fs.readFileSync('./cv-templates/template-1.html', 'utf8')

  var options = {
    format: 'A4',
    orientation: 'portrait',
    border: '10mm'
  }

  var form = req?.body;

  var fileName = `${req?.user?.id}-${Date.now()}.pdf`;

  var document = {
    html: html,
    data: {
      form: form
    },
    path: process.cwd() + `/public/generated-cvs/${fileName}`
  }

  pdf
    .create(document, options)
    .then(async _ => {
      await User.findByIdAndUpdate(req?.user?.id, { $push: { generatedCVs: fileName } })
      res.status(200).json({
        status: 'success',
        message: 'cv generated successfully'
      })
    })
    .catch(error => {
      res.status(error?.statusCode || 500).json({
        status: 'error',
        message: error?.message || 'something went wrong'
      })
    })
})