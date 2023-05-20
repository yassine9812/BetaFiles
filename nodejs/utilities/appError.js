class appError extends Error {
    constructor(messege, statusCode) {
      super(messege);
  
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4')?'fail':'error';
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  module.exports = appError;
  