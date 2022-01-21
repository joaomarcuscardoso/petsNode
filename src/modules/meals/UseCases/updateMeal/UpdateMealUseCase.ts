import { getCustomRepository } from 'typeorm';
import { MealsRepositories } from 'modules/meals/infra/repositories/MealsRepositories';
import { PetsRepositories } from '@modules/pets/infra/repositories/PetsRepositories';

class UpdateMealUseCase {
  async execute({ id, description, meal_time, pet_id, user_id}) {
    const mealsRepositories = getCustomRepository(MealsRepositories);
    const petsRepositories = getCustomRepository(PetsRepositories);

    if(!id) {
      throw new Error("Id is required!");
    }

    const meal = await mealsRepositories.findOne({
      id
    });

    if(meal) {

      const pet = await petsRepositories.findOne({id: meal.pet_id});
      if(pet) {
  
        if(pet.user_id != user_id) {
          throw new Error("Unauthorized");
        }
      }
    }

    if(description) {

      meal.description = description;
    }

    if(meal_time) {
      meal.meal_time = meal_time;
    }

    if(pet_id) {
      meal.pet_id = pet_id;
    }

    const mealUpdate = await mealsRepositories.save(meal);

    return mealUpdate;
  }
}

export { UpdateMealUseCase };