import { Request, Response } from "express";
import { RegisterUserUseCase } from "./RegisterUserUseCase";


class RegisterUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, admin, password } = request.body;

    const registerUserUseCase = new RegisterUserUseCase();

    const user = await registerUserUseCase.execute({
      name,
      email,
      admin,
      password,
    });

    return response.status(201).json(user);
  }
}

export { RegisterUserController };
