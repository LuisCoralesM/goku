import { Router } from "express";
import { handler as userList } from "./api-user-list/";
import { handler as userPlusOne } from "./api-user-plus-one/";

const usersRouter = Router();

usersRouter.post("/plus", userPlusOne); // Plus one
usersRouter.get("/", userList); // List users

export { usersRouter };
