import { Request, Response } from "express";
import { UpdateMealUseCase } from "./UpdateMealUseCase";

class UpdateMealController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;
    const { description, meal_time, pet_id} = request.body;
    const { id } = request.params;


    const updateMealUseCase = new UpdateMealUseCase();
    const meal = await updateMealUseCase.execute({ id, description, meal_time, pet_id, user_id });


    return response.status(201).json({meal});
  }
}

export { UpdateMealController };