import { DeletePetUseCase } from "./DeletePetUseCase";
import { Request, Response } from "express";

class DeletePetController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;
    const { user_id } = request;

    const deletePetUseCase = new DeletePetUseCase();
    const message = await deletePetUseCase.execute({id, user_id});

    return response.json({message}).status(201);
  }
}

export { DeletePetController };