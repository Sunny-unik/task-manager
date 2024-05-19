const taskSchema = require("../models/taskSchema");

const createTask = async (taskData) => {
  const task = new taskSchema(taskData);
  return { ...(await task.save())?._doc };
};

const getTasks = async (userId) => {
  const tasks = await taskSchema.find({ userId: userId });
  return tasks;
};

const getTaskById = async (taskId) => {
  const task = await taskSchema.findById(taskId);
  if (!task) throw new Error("Task not found");
  return task;
};

const updateTask = async (taskId, updateData) => {
  const updatedTask = await taskSchema.findByIdAndUpdate(taskId, updateData, {
    new: true,
    runValidators: true,
  });
  if (!updatedTask) throw new Error("Task not found");
  return updatedTask;
};

const deleteTask = async (taskId) => {
  return await taskSchema.findByIdAndDelete(taskId);
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };
