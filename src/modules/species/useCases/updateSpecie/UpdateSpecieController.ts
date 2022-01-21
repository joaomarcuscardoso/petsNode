import { UpdateSpecieUseCase } from "./UpdateSpecieUseCase";
import { Request, Response } from "express";

class UpdateSpecieController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;
    const {  name, description } = request.body;
    const { id } = request.params;

    const updatedSpecieUseCase = new UpdateSpecieUseCase();

    const message = await updatedSpecieUseCase.execute({id, name, description, user_id});
  
    return response.json({message});
  }
}

export { UpdateSpecieController };