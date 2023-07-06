import { log } from "console";
import express, { Request, Express, Response } from "express";
import { tweetRouter } from "./routes/tweet";
import { userRouter } from "./routes/user";

const app = express();
app.use(express());

app.get("/api", (rqe: Request, res: Response) => {
  res.send("hello");
});

// User resource endpoints
app.post("/users", userRouter);

// Tweet resource endpoints
app.post("/tweets", tweetRouter);

app.listen(5000, () => {
  log("hello");
});
