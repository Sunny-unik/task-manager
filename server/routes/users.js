const express = require("express");
const { errorConstants } = require("../constants");

const router = express.Router();

router.get("/", (_, res) => {
  const { code, message } = errorConstants.notFound("User");
  res.status(code).send(message);
});

module.exports = router;
