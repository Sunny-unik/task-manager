const errorConstantStructure = (
  code = 500,
  message = "Internal Server Error"
) => ({ code, message });

const errorConstants = {
  internalServerError: errorConstantStructure,
  badRequest: () => errorConstantStructure(400, "Bad Request"),
  notFound: (entity = "Entity") =>
    errorConstantStructure(404, entity + " not found"),
  unauthorized: (login) =>
    errorConstantStructure(401, login ? "Invalid Credentials" : "Unauthorized"),
};

module.exports = errorConstants;
