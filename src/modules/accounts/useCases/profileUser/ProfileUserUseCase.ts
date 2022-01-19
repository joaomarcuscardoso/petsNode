import { instanceToPlain } from 'class-transformer';
import { UsersRepositories } from "../../infra/repositories/UsersRepositories";
import { getCustomRepository } from 'typeorm';


class ProfileUserUseCase {
  async execute(id: string) {
    const usersRepository = getCustomRepository(UsersRepositories);
    const user = await usersRepository.findOne(id);

    return instanceToPlain(user);
  }
}

export { ProfileUserUseCase };