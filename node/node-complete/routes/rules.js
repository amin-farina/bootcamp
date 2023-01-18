import { Router } from "express";
import {
  createRule,
  deleteRule,
  getAllRules,
  getRulesByName,
  updateRule,
} from "../controllers/rules.js";

const rulesRoutes = Router();

rulesRoutes.get("/", getAllRules);
rulesRoutes.get("/:name", getRulesByName);
rulesRoutes.post("/create", createRule);
rulesRoutes.put("/:name", updateRule);
rulesRoutes.delete("/:id", deleteRule);

export default rulesRoutes;
