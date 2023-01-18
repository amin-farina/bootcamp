import { Router } from "express";
import userRoutes from "./users.js";
import taskRoutes from "./task.js"
import rulesRoutes from "./rules.js";

const apiRoute = Router();

apiRoute.use("/users", userRoutes );
apiRoute.use("/tasks", taskRoutes );
apiRoute.use("/rules", rulesRoutes);

export default apiRoute;