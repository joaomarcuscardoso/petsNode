import { Request, Response } from "express";

class CreateMealController {
  async handle(request: Request, response: Response):Promise<Response> {


    return response.status(201);
  }
}

export { CreateMealController };