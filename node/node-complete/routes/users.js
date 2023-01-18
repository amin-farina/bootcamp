import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.get("/:userId", getUserById);
userRoutes.post("/create", createUser);
userRoutes.put("/:userId", updateUser);
userRoutes.delete("/:userId", deleteUser);
userRoutes.post("/:userId/task", createUserTask);

export default userRoutes;
