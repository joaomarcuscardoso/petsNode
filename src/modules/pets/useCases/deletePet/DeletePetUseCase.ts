import { getCustomRepository } from 'typeorm';
import { PetsRepositories } from 'modules/pets/infra/repositories/PetsRepositories';
import { MealsRepositories } from 'modules/meals/infra/repositories/MealsRepositories';

class DeletePetUseCase {
  async execute({ id, user_id }) {
    const petsRepositories = getCustomRepository(PetsRepositories);
    const mealsRepositories = getCustomRepository(MealsRepositories);
    const pet = await petsRepositories.findOne({id, user_id});

    if(!pet) {
      throw new Error("Unauthorized");
    }

    const meal = await mealsRepositories.find({pet_id: id});
    await petsRepositories.delete(id);
    await mealsRepositories.remove(meal);
    

    return "Pet is deleted!";
  }
}

export { DeletePetUseCase };