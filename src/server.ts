import { log } from "console";
import express, { Request, Response } from "express";

const app = express();
app.use(express());

app.get("/api", (rqe: Request, res: Response) => {
  res.send("hello");
});

app.listen(5000, () => {
  log("hello");
});
