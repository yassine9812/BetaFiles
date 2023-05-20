const express = require("express");
const appError = require("./utilities/appError");
const userRoute = require("./routes/userRoute");
const infoCvRouter = require("./routes/infoCvRouter");
const globalErrorHandler = require("./controllers/erroeController");
var cors = require("cors");
const User = require("./models/userModel");
// const { cvInfo, experience, education } = require("./models/info.cv.model");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/", userRoute);
app.use("/", infoCvRouter);

app.all("*", (req, res, next) => {
  next(new appError(`cant find ${req.originalUrl} on this server`), 404);
});
app.use(globalErrorHandler);

module.exports = app;
