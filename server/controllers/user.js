const UserSchema = require("../models/userSchema");

const createUser = async (name, email, password) => {
  const user = new UserSchema({ name, email, password });
  return await user.save();
};

module.exports = { createUser };
