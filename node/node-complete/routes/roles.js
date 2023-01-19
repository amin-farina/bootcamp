import { Router } from "express";
import {
  createRol,
  deleteRol,
  getAllRoles,
  getRolByName,
  updateRol,
} from "../controllers/roles.js";

const rolesRoutes = Router();

rolesRoutes.get("/", getAllRoles);
rolesRoutes.get("/:name", getRolByName);
rolesRoutes.post("/create", createRol);
rolesRoutes.put("/:name", updateRol);
rolesRoutes.delete("/:id", deleteRol);

export default rolesRoutes;
