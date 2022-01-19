import { UpdateSpecieUseCase } from "./UpdateSpecieUseCase";
import { Request, Response } from "express";

class UpdateSpecieController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, description } = request.body;
    const { user_id } = request;

    const updatedSpecieUseCase = new UpdateSpecieUseCase();

    const specie = await updatedSpecieUseCase.execute({id, name, description, user_id});
  
    return response.json(specie);
  }
}

export { UpdateSpecieController };