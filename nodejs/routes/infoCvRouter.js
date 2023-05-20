const express = require("express");
const cvinfoController = require("../controllers/cvInfoController");
// const { cvInformation, experience, education } = require("../models/info.cv.model");
const router = express.Router();

router.route("/cvinfo").post(cvinfoController.userCvInfo);

module.exports = router;
