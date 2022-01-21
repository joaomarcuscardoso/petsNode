import { AppError } from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import { IUserRequest } from "modules/accounts/dtos/IUserRequest";
import { UsersRepositories } from "modules/accounts/infra/repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";



class RegisterUserUseCase {
 
  async execute({ name, email, admin, password}: IUserRequest ) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if(!email) {
      throw new AppError("E-mail is required");
    }

    const usersAlreadyExists = await usersRepository.findOne({
      email,
    });

    if(usersAlreadyExists) {
      throw new AppError("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });
    
    await usersRepository.save(user);

    return user;

  }

}
 

export { RegisterUserUseCase };