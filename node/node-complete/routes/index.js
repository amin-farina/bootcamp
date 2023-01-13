import { Router } from "express";
import userRoutes from "./users.js";

const apiRoute = Router();

apiRoute.use("/users", userRoutes );


export default apiRoute;