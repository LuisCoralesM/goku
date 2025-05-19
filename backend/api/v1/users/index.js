import { Router } from "express";
import { handler as userMe } from "./api-user-get-own/handler.js";
import { handler as userGet } from "./api-user-get/handler.js";
import { handler as userList } from "./api-user-list/handler.js";

const usersRouter = Router();

usersRouter.get("/me", userMe); // Get own user
usersRouter.get("/:id", userGet); // Get specific user by id
usersRouter.get("/", userList); // List users

export { usersRouter };
