import { Request, Response} from "express";
import { UpdatePetUseCase } from "./UpdatePetUseCase";

class UpdatePetController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, number_meals, restrictions, species_id } = request.body;
    const { id } = request.params;
    const { user_id } = request;

    const updatePetUseCase = new UpdatePetUseCase();

    const pet = await updatePetUseCase.execute({ id, name, number_meals, restrictions, species_id, user_id });

    return response.json(pet).status(201);
  }
}

export { UpdatePetController };