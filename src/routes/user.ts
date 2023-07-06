import { Router, Request, Response } from "express";

const userRouter: Router = Router();

// ==> create users
userRouter.post("/users", (req: Request, res: Response) => {
  res.send("heey");
});

//  ==> list all users
userRouter.get("/users", (req: Request, res: Response) => {
  res.send("heey");
});

// ==> get user by id
userRouter.get("/users/:id", (req: Request, res: Response) => {
  res.send(req.params.id);
});

// ==> update user by id
userRouter.put("/users/:id", (req: Request, res: Response) => {
  res.send(req.params.id);
});

// ==> delete user by id
userRouter.delete("/users/:id", (req: Request, res: Response) => {
  res.send(req.params.id);
});

export { userRouter };
