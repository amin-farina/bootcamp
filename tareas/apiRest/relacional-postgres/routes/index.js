const express = require("express");
const userRouter = require('./user');
const rulesRouter = require("./rules");

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/rules", rulesRouter);


module.exports = apiRouter;