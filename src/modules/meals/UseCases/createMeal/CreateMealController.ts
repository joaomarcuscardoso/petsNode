import { Request, Response } from "express";
import { CreateMealUseCase } from "./CreateMealUseCase";

class CreateMealController {
  async handle(request: Request, response: Response):Promise<Response> {
    const { description, meal_time, pet_id} = request.body;


    const createMealUseCase = new CreateMealUseCase();
    const meal = await createMealUseCase.execute({description, meal_time, pet_id});


    return response.json(meal).status(201);
  }
}

export { CreateMealController };