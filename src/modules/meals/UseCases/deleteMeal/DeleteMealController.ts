import { Request, Response } from "express";
import { DeleteMealUseCase } from "./DeleteMealUseCase";

class DeleteMealController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;
    const { user_id } = request;

    const deleteMealUseCase = new DeleteMealUseCase();
  
    const message = await deleteMealUseCase.execute({id, user_id});

    return response.status(200).json(message);
  }
}

export { DeleteMealController };