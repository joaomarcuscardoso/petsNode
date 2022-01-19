import { Request,Response } from 'express';
import { ListAllSpeciesUseCase } from './ListAllSpeciesUseCase';

class ListAllSpeciesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const speciesUseCase = new ListAllSpeciesUseCase();
    const { user_id } = request;

    const species = await speciesUseCase.execute({user_id});

    return response.json(species);
  }
}

export { ListAllSpeciesController };