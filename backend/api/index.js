import cors from "cors";
import express, { Router } from "express";
import { v1Router } from "./v1/index.js";

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

export default app;
