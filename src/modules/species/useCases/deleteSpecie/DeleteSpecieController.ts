import { Request, Response } from "express";
import { DeleteSpecieUseCase } from "./DeleteSpecieUseCase";

class DeleteSpecieController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    const { user_id } = request;

    const deleteSpecieUseCase = new DeleteSpecieUseCase();
    const messages = await deleteSpecieUseCase.execute({id, user_id});


    return response.status(200).json({messages});
  }
}

export { DeleteSpecieController };