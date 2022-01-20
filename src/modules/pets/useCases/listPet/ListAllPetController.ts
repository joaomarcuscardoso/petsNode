import { Request, Response } from "express";
import { ListAllPetUseCase } from "./ListAllPetUseCase";

class ListAllPetController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    
    const listAllPetUseCase = new ListAllPetUseCase();

    const pets =  await listAllPetUseCase.execute({user_id});


    return response.json(pets);
  }
}

export { ListAllPetController };