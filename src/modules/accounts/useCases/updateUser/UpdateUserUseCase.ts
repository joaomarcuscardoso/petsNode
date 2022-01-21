import { IUpdateUser } from '@modules/accounts/dtos/IUpdateUser';
import { User } from '@modules/accounts/infra/entities/User';
import { AppError } from '@shared/errors/AppError';
import { UsersRepositories } from 'modules/accounts/infra/repositories/UsersRepositories';
import { getCustomRepository } from 'typeorm';


class UpdateUserUseCase {
  async execute({user_id, name}: IUpdateUser) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    if(!name) {
      throw new AppError("Name is required!");
    }

    const user = await usersRepositories.createQueryBuilder()
    .update(User)
    .set({name})
    .where({id: user_id})
    .execute();

    return "User was been update";
  }
}

export { UpdateUserUseCase };