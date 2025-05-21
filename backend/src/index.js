import { User } from "./entity/User";

import cors from "cors";
import dotenv from "dotenv";
import express, { Router } from "express";
import { v1Router } from "./v1/index.js";

import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  synchronize: true,
  logging: false,
  entities: [User],
  url: process.env.DATABASE_URL,
});

AppDataSource.initialize()
  .then(async () => {
    const userRepo = AppDataSource.manager.getRepository(User);

    const today = new Date();
    const goal = new Date();
    goal.setDate(goal.getDate() + 100);

    const user = userRepo.create({
      username: "Gatuso",
      level: 1,
      exp: 0,
      expToNextLevel: 100,
      expPerDay: 100,
      startDay: today.toISOString(),
      goalDay: goal.toISOString(),
      streak: 0,
      missingDays: 0,
      todo: [],
    });

    console.log("Inserting a new user into the database...");

    await AppDataSource.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users);

    dotenv.config();

    const port = process.env.PORT || 8000;

    const app = express();
    app.use(cors());
    app.use(express.json());

    const apiRouter = Router();
    apiRouter.use("/v1", v1Router);
    app.use(apiRouter);

    app.get("/", (req, res) => {
      res.send("server is running");
    });

    app.listen(port, () => {
      console.log("Server running on port", port);
      console.log(`http://localhost:${port}`);
    });
  })
  .catch(error => console.log(error));
