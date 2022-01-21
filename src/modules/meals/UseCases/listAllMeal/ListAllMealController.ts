import { Request, Response } from "express";
import { ListAllMealUseCase } from "./ListAllMealUseCase";


class ListAllMealController { 
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;

    const listAllMealUseCase = new ListAllMealUseCase();

    const meals = await listAllMealUseCase.execute({user_id});

    return response.json({meals}).status(201);
  }
}

export { ListAllMealController };