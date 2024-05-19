const errorConstantStructure = (
  code = 500,
  message = "Internal Server Error",
  errors = {}
) => ({ code, message, ...errors });

const errorConstants = {
  internalServerError: errorConstantStructure,
  badRequest: () => errorConstantStructure(400, "Bad Request"),
  validationError: (errors) =>
    errorConstantStructure(403, "Invalid Data", { errors }),
  duplicateValues: (fields) =>
    errorConstantStructure(409, "Duplicate Data", { fields }),
  notFound: (entity = "Entity") =>
    errorConstantStructure(404, entity + " not found"),
  unauthorized: () => errorConstantStructure(401, "Unauthorized"),
};

module.exports = errorConstants;
