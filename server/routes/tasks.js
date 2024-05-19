const express = require("express");
const { responseConstants } = require("../constants");

const router = express.Router();

router.get("/", (_, res) => {
  const resObject = responseConstants.get([], null, "Tasks");
  res.send(resObject);
});

module.exports = router;
