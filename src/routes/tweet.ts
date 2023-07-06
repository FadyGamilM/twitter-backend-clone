import { Router, Request, Response } from "express";

const tweetRouter: Router = Router();

// ==> create tweets
tweetRouter.post("/", (req: Request, res: Response) => {
  res.send("heey");
});

//  ==> list all tweets
tweetRouter.get("/", (req: Request, res: Response) => {
  res.send("heey");
});

// ==> get user by id
tweetRouter.get("/:id", (req: Request, res: Response) => {
  res.send(req.params.id);
});

// ==> update user by id
tweetRouter.put("/:id", (req: Request, res: Response) => {
  res.send(req.params.id);
});

// ==> delete user by id
tweetRouter.delete("/:id", (req: Request, res: Response) => {
  res.send(req.params.id);
});

export { tweetRouter };
