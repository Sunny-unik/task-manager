const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "'name' is required"],
      validate: {
        validator: (value) => typeof value === "string" && value.trim().length,
        message: "Please enter a valid name",
      },
    },
    email: {
      type: String,
      required: [true, "'email' is required"],
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "'password' is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      maxlength: [16, "Password must be at most 16 characters long"],
      validate: {
        validator: (value) =>
          /[A-Z]/.test(value) &&
          /[a-z]/.test(value) &&
          /[0-9]/.test(value) &&
          /[\W_]/.test(value),
        message:
          "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
