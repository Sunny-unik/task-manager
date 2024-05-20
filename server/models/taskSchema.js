const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "'Title' is required"] },
    description: { type: String, default: "" },
    status: { type: String, required: [true, "'Status' is required"] },
    priority: { type: String, required: [true, "'Priority' is required"] },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    dueDate: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tasks", taskSchema);
