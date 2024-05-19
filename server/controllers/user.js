const bcrypt = require("bcrypt");
const UserSchema = require("../models/userSchema");

const createUser = async (name, email, password) => {
  const encryptedPassword = await bcrypt.hash(password, 10);
  const user = new UserSchema({ name, email, password: encryptedPassword });
  return { ...(await user.save())?._doc, password: undefined };
};

module.exports = { createUser };
