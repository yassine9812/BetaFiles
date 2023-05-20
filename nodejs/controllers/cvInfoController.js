const express = require("express");
const { cvInformation, experience, education } = require("../models/info.cv.model");
const mongoose = require("mongoose");

exports.userCvInfo = async (req, res) => {
  // console.log(req.body);
  try {
    // let experienceDate = {...experience}

    const dataCvInfo = await cvInformation.create({
      name: req.body.name,
      surname: req.body.surname,
      date: req.body.dob,
      sex: req.body.sex,
      phoneNumber: req.body.phone,
      experienceData: {
        title: req.body.experience.title,
        company: req.body.experience.company,
        dateFirst: req.body.experience.startdate,
        dateEnd: req.body.experience.enddate,
      },
      educationData: {
        degree: req.body.education.degree,
        university: req.body.education.university,
        gradDate: req.body.education.graduationdate,
      },
      skillsData: {
        skillName: req.body.skills,
      },
    });
    res.status(201).json({
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
      data: e,
    });
  }
};
