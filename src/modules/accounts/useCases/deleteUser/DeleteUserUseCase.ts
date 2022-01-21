import { UsersRepositories } from 'modules/accounts/infra/repositories/UsersRepositories';
import { getCustomRepository } from 'typeorm';
import { PetsRepositories } from 'modules/pets/infra/repositories/PetsRepositories';
import { SpeciesRepositories } from 'modules/species/infra/repositories/SpeciesRepositories';
import { MealsRepositories } from 'modules/meals/infra/repositories/MealsRepositories';

class DeleteUserUseCase {

  async execute({id}): Promise<string> {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const petsRepositories = getCustomRepository(PetsRepositories);
    const speciesRepositories = getCustomRepository(SpeciesRepositories);
    const mealsRepositories = getCustomRepository(MealsRepositories);

    const pet = await petsRepositories.find({user_id: id});

    for(let i = 0;i < pet.length;i++) {

      await mealsRepositories.delete({pet_id: pet[i].id})
      await petsRepositories.remove(pet);
    }

    await speciesRepositories.delete({user_id: id});

    await usersRepositories.delete(id);
    
    return "User was been deleted!";

  }
}

export { DeleteUserUseCase };