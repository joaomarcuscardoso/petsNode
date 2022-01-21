import { Request, Response } from "express";
import { DeleteMealUseCase } from "./DeleteMealUseCase";

class DeleteMealController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { id } = request.params;

    const deleteMealUseCase = new DeleteMealUseCase();
  
    const message = await deleteMealUseCase.execute({id, user_id});

    return response.status(200).json(message);
  }
}

export { DeleteMealController };