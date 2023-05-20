const mongoose = require("mongoose");

const experience = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  company: {
    type: String,
  },
  dateFirst: {
    type: Date,
  },
  dateEnd: {
    type: Date,
  },
});

const education = new mongoose.Schema({
  degree: {
    type: String,
  },
  university: {
    type: String,
  },
  gradDate: {
    type: Date,
  },
});

const skills = new mongoose.Schema({
  skillName: {
    type: String,
  },
});

const cvInfo = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  surname: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    // required: true,
  },
  sex: {
    type: String,
    // required: true,
  },
  phoneNumber: {
    type: String,
    // required: true,
  },
  experienceData: {
    type: experience,
  },
  educationData: {
    type: education,
  },
  skillsData: {
    type: skills,
  },
});

const cvInformation = new mongoose.model("cvInformation", cvInfo);
module.exports = {
  //cvInformation:cvInformation the same as cvInformation 
  cvInformation,
  experience,
  education,
};
