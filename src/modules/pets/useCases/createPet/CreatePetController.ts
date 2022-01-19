import { Request, Response } from "express";
import { CreatePetUseCase } from "./CreatePetUseCase";

class CreatePetController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, restrictions, species_id, meals_id, number_meals} = request.body;

    const createPetUseCase = new CreatePetUseCase();

    const pet = await createPetUseCase.execute({name, restrictions,  meals_id, number_meals, species_id});

    return response.json().send(201);
  }
}

export { CreatePetController };