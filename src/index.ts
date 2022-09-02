import express, { NextFunction, Request, Response } from "express";
import AppError from "./errors/AppError"

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
      return res.status(error.code).json({ error: error.message })
  }
  return res.status(500).json({ error: 'Internal server error!' })
})

export { app };
