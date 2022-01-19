import { Request, Response } from "express";
import { CreateSpecieUseCase } from "./CreateSpecieUseCase";

class CreateSpecieController{
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description} = request.body;
    const createSpecieUseCase = new CreateSpecieUseCase();

    const specie = await createSpecieUseCase.execute({name, description});

    return response.json(specie).status(201);
  }
}

export { CreateSpecieController };