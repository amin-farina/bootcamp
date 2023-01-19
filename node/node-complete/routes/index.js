import { Router } from "express";
import userRoutes from "./users.js";
import taskRoutes from "./task.js"
import rolesRoutes from "./roles.js";

const apiRoute = Router();

apiRoute.use("/users", userRoutes );
apiRoute.use("/tasks", taskRoutes );
apiRoute.use("/roles", rolesRoutes );

export default apiRoute;