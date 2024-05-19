const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, required: true },
    priority: { type: String, required: true },
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
