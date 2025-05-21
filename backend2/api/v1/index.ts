import { Router } from "express";
import { usersRouter } from "./users";

const v1Router: Router = Router();

v1Router.use("/users", usersRouter);

export { v1Router };
