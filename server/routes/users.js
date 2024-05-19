const express = require("express");
const { responseConstants } = require("../constants");
const { createUser, login, logout } = require("../controllers/user");
const auth = require("../middleware/auth");
const userSchema = require("../models/userSchema");

const router = express.Router();

router.get("/", (_, res) => res.send(responseConstants.get([], null, "Users")));
router.get("/auth", auth, async (req, res, next) => {
  try {
    const { userId } = req.decoded;
    const user = await userSchema.findById(userId);
    res.send(
      responseConstants.get({ ...user?._doc, password: undefined }, "Success")
    );
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await createUser(name, email, password);
    res.send(responseConstants.create(user, "User registered successfully"));
  } catch (error) {
    next(error);
  }
});
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
