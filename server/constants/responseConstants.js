const responseConstantStructure = (data, message, success = "ok") => ({
  data: data,
  message,
  success,
});

const responseConstants = {
  get: (data, message, entity = "Data", success) =>
    responseConstantStructure(
      data,
      message ? message : entity + " retrieved successfully",
      success
    ),
  create: (data, message, entity = "Entity", success) =>
    responseConstantStructure(
      data,
      message ? message : entity + " created successfully",
      success
    ),
  update: (data, message, entity = "Entity", success) =>
    responseConstantStructure(
      data,
      message ? message : entity + " created successfully",
      success
    ),
  delete: (data, message, entity, success) =>
    responseConstantStructure(
      data,
      message ? message : entity + " deleted successfully",
      success
    ),
};

module.exports = responseConstants;
