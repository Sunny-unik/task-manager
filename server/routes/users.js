const express = require("express");
const { responseConstants } = require("../constants");
const { createUser } = require("../controllers/user");

const router = express.Router();

router.get("/", (_, res) => res.send(responseConstants.get([], null, "Users")));
router.post("/", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await createUser(name, email, password);
    res.send(responseConstants.create(user, "User registered successfully"));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
