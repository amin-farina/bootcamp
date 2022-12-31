const express = require("express");
const userRouter = require('./user');
const rulesRouter = require("./rules");
const taskRouter = require("./task");

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/rules", rulesRouter);
apiRouter.use("/task", taskRouter);


module.exports = apiRouter;