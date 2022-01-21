import { createQueryBuilder, getCustomRepository } from 'typeorm';
import { MealsRepositories } from 'modules/meals/infra/repositories/MealsRepositories';
import { PetsRepositories } from 'modules/pets/infra/repositories/PetsRepositories';
import { Meal } from '@modules/meals/infra/entities/Meal';

class ListAllMealUseCase {
  async execute({user_id}): Promise<Meal[]> {
    const mealsRepositories = getCustomRepository(MealsRepositories);
    const petsRepositories = getCustomRepository(PetsRepositories);

    const pet = await petsRepositories.find({user_id});

    let meal: Meal[];
    for(let i = 0; i < pet.length; i++) {
      meal = await mealsRepositories.find({pet_id: pet[i].id});

    }
    
    return meal;
  }
}

export { ListAllMealUseCase };