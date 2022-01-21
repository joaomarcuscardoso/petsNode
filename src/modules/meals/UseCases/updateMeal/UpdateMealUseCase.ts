import { getCustomRepository } from 'typeorm';
import { MealsRepositories } from 'modules/meals/infra/repositories/MealsRepositories';
import { PetsRepositories } from '@modules/pets/infra/repositories/PetsRepositories';

import { AppError } from '@shared/errors/AppError';


class UpdateMealUseCase {
  async execute({ id, description, meal_time, pet_id, user_id}) {
    const mealsRepositories = getCustomRepository(MealsRepositories);
    const petsRepositories = getCustomRepository(PetsRepositories);

    if(!id ||!description || !meal_time || !pet_id) {
      throw new AppError("All fields is required");
    }

    const pet = await petsRepositories.findOne({id: pet_id});


    if(pet) {

      if(pet.user_id != user_id) {
        throw new AppError("Unauthorized");
      }

      await mealsRepositories
      .createQueryBuilder()
      .update({description, meal_time, pet_id})
      .where({id})
      .execute();

    } 

    return "Meal was been update";
  }

}

export { UpdateMealUseCase };