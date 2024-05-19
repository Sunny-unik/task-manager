const express = require("express");
const auth = require("../middleware/auth");
const { responseConstants } = require("../constants");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/task");

const router = express.Router();

router.post("/", auth, async (req, res, next) => {
  try {
    const task = await createTask({ ...req.body, userId: req.decoded.userId });
    res.send(responseConstants.create(task, null, "Task"));
  } catch (error) {
    next(error);
  }
});

router.get("/", auth, async (req, res, next) => {
  try {
    const tasks = await getTasks(req.decoded.userId);
    res.json(responseConstants.get(tasks, "Your all tasks retrieved"));
  } catch (error) {
    next(error);
  }
});

router.get("/:id", auth, async (req, res, next) => {
  try {
    const task = await getTaskById(req.params.id);
    res.json(responseConstants.get(task, "Task retrieved successfully"));
  } catch (error) {
    next(error);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  try {
    const updatedTask = await updateTask(req.params.id, req.body);
    res.json(responseConstants.update(updatedTask, null, "Task"));
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  try {
    const deletedTask = await deleteTask(req.params.id);
    res.json(responseConstants.delete(deletedTask, null, "Task"));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
