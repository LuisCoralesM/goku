import cors from "cors";
import express from "express";
import { apiRouter } from "./api/index.js";

const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

app.use("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log("Server running on port", port);
  console.log(`http://localhost:${port}`);
});
