import { AppError } from "@shared/errors/AppError";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata";
import "../database"
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());


app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
          return response.status(err.statusCode).json({
              message: err.message,
          });
      }
      return response.status(500).json({
          status: "error",
          message: `Internal server error - ${err.message}`,
      });
  }
);

app.listen(3000, () => console.log("🔥 Server Running, http://localhost:3000")); 