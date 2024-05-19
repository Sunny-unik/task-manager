const jwt = require("jsonwebtoken");
const { errorConstants } = require("../constants");

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  const { code, message } = errorConstants.badRequest();
  if (!token) return res.status(code).json({ message });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.decoded = decoded;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(code).json({ message });
  }
};
