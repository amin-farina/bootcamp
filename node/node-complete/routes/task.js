import { Router } from "express";
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from "../controllers/task.js"

const taskRoutes = Router();

taskRoutes.get("/", getAllTasks);
taskRoutes.get("/:taskId", getTaskById);
taskRoutes.post("/create", createTask);
taskRoutes.put("/:taskId", updateTask);
taskRoutes.delete("/:taskId", deleteTask);

export default taskRoutes;