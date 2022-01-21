import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { name } = request.body;

    const updateUserUseCase = new UpdateUserUseCase();

    const message = await updateUserUseCase.execute({user_id, name});
    

    return response.json({message});
  }
}

export { UpdateUserController};