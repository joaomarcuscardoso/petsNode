import { hash } from "bcryptjs";
import { IUserRequest } from "../../dtos/IUserRequest";
import { UsersRepositories } from "../../infra/repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";



class RegisterUserUseCase {
 
  async execute({ name, email, admin, password}: IUserRequest ) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if(!email) {
      throw new Error("E-mail is required");
    }

    const usersAlreadyExists = await usersRepository.findOne({
      email,
    });

    if(usersAlreadyExists) {
      throw new Error("User already exists");
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