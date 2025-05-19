import { Router } from "express";
import { authRouter } from "./auth/index.js";
import { dataRouter } from "./data/index.js";
import { usersRouter } from "./users/index.js";

const v1Router = Router();

v1Router.use("/auth", authRouter);
v1Router.use("/data", dataRouter);
v1Router.use("/users", usersRouter);

export { v1Router };
