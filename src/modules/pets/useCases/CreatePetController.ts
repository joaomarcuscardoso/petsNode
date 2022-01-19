import { Request, Response } from "express";

class CreatePetController {
  async handle(request: Request, response: Response): Promise<Response> {


    return response.json().send(201);
  }
}

export { CreatePetController };