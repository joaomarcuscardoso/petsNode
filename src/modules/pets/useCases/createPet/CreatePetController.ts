import { Request, Response } from "express";
import { CreatePetUseCase } from "./CreatePetUseCase";

class CreatePetController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, restrictions, species_id, number_meals} = request.body;
    const { user_id } = request;
    
    const createPetUseCase = new CreatePetUseCase();

    const pet = await createPetUseCase.execute({name, restrictions, number_meals, species_id, user_id});

    return response.json(pet).send(201);
  }
}

export { CreatePetController };