import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;
    const deleteUserUseCase = new DeleteUserUseCase();

    const message = await deleteUserUseCase.execute({id: user_id});

    return response.json({message}).status(201);
  }
}

export { DeleteUserController };