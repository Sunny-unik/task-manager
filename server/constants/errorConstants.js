const errorConstantStructure = (
  code = 500,
  message = "Internal Server Error",
  errors
) => ({ code, message, errors });

const errorConstants = {
  internalServerError: errorConstantStructure,
  badRequest: () => errorConstantStructure(400, "Bad Request"),
  validationError: (errors) =>
    errorConstantStructure(403, "Invalid Data", errors),
  notFound: (entity = "Entity") =>
    errorConstantStructure(404, entity + " not found"),
  unauthorized: (login) =>
    errorConstantStructure(401, login ? "Invalid Credentials" : "Unauthorized"),
};

module.exports = errorConstants;
