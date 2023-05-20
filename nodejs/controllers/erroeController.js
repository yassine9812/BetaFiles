module.exports=(err, req, res, next) => {
    //err.stack shows where the error in terminal
    // console.log(err.stack);
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
      status: err.status,
      messege: err.message,
    });
  }