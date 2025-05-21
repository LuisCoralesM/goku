import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response, Router } from "express";
import { v1Router } from "./v1/";

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

const apiRouter = Router();
apiRouter.use("/v1", v1Router);
app.use(apiRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("server is running");
});

app.use(express.json());

const server = app.listen(port, () => console.log(`🚀 Server ready at: http://localhost:${port}`));

// export default server;
