import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IAuthenticateRequest } from "../../dtos/IAuthenticateRequest";
import { UsersRepositories } from "../../infra/repositories/UsersRepositories"
import { getCustomRepository } from "typeorm";

 

class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateRequest) {

    const usersRepositories = getCustomRepository(UsersRepositories); 
    const user = await usersRepositories.findOne({email});


    if(!user) {
      throw new Error("Email/Password incorrect");
    }
  
    const passwordMatch = await compare(password, user.password);
  
    if(!passwordMatch) {
      // Criar Error Customizável
      throw new Error("Email/Password incorrect");
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