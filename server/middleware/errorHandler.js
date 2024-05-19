const { errorConstants } = require("../constants");

const errorHandler = (error, _req, res, _next) => {
  console.error(error.stack);
  if (error.name === "ValidationError") {
    const messages = Object.values(error.errors).map((val) => val.message);
    const response = errorConstants.validationError(messages);
    return res.status(response.code).json(response);
  }
  if (error.code && error.code === 11000) {
    const response = errorConstants.duplicateValues(error.keyPattern);
    return res.status(response.code).json(response);
  }
  const { code, message } = errorConstants.internalServerError();
  res.status(code).send({ message });
};

module.exports = errorHandler;
