import { Request, Response } from "express";
import { CreateSpecieUseCase } from "./CreateSpecieUseCase";
import { v4 as uuid } from "uuid";

class CreateSpecieController{
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description} = request.body;
    const { user_id } = request;

    const createSpecieUseCase = new CreateSpecieUseCase();

    const specie = await createSpecieUseCase.execute({name, description, user_id});

    return response.json(specie).status(201);
  }
}

export { CreateSpecieController };