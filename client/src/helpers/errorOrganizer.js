export default function (error) {
  if (!error.response) return alert("Internal server error!");
  const {
    data: { code, message, errors, fields },
  } = error.response;
  console.error({ message, code });
  const finalizeErrors = fields
    ? Object.keys(fields).map((key) => `This ${key} is already used`)
    : errors;
  if (finalizeErrors && finalizeErrors.length)
    return alert(finalizeErrors.join(",\n"));
  alert(message || "Internal Server Error!");
}
