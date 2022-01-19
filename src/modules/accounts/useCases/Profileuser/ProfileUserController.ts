import { ProfileUserUseCase } from "./ProfileUserUseCase";
import {Request, Response } from "express";

class ProfileUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const profileUserUseCase = new ProfileUserUseCase();

    const user = await profileUserUseCase.execute(user_id);

    return response.json(user);
  }
}

export { ProfileUserController };