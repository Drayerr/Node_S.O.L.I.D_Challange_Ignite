import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express"

import AppError from "./errors/AppError"

import { usersRoutes } from "./routes/users.routes";

import swaggerFile from "./swagger.json"

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
      return res.status(error.code).json({ error: error.message })
  }
  return res.status(500).json({ error: 'Internal server error!' })
})

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

export { app };
