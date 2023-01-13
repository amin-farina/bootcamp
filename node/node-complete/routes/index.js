import { Router } from "express";
import userRoutes from "./users.js";
import taskRoutes from "./task.js"

const apiRoute = Router();

apiRoute.use("/users", userRoutes );
apiRoute.use("/tasks", taskRoutes );


export default apiRoute;