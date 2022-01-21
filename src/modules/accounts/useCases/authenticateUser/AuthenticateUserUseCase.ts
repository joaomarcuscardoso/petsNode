import { AppError } from "@shared/errors/AppError";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IAuthenticateRequest } from "modules/accounts/dtos/IAuthenticateRequest";
import { UsersRepositories } from "modules/accounts/infra/repositories/UsersRepositories"
import { getCustomRepository } from "typeorm";

 

class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateRequest) {

    const usersRepositories = getCustomRepository(UsersRepositories); 
    const user = await usersRepositories.findOne({email});


    if(!user) {
      throw new AppError("Email/Password incorrect");
    }
  
    const passwordMatch = await compare(password, user.password);
  
    if(!passwordMatch) {
      // Criar AppError Customizável
      throw new AppError("Email/Password incorrect");
    }

    const token = sign(
      {
        email: user.email,
      },
      process.env.TOKEN_AUTH_PASSWORD,
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );


    return token;
  }
}

export { AuthenticateUserUseCase };