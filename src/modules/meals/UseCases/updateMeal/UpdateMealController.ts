import { Request, Response } from "express";
import { UpdateMealUseCase } from "./UpdateMealUseCase";

class UpdateMealController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, description, meal_time, pet_id} = request.body;
    const { user_id } = request;

    const updateMealUseCase = new UpdateMealUseCase();
    const meal = await updateMealUseCase.execute({ id, description, meal_time, pet_id, user_id });


    return response.status(201).json({meal});
  }
}

export { UpdateMealController };