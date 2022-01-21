import { MealsRepositories } from 'modules/meals/infra/repositories/MealsRepositories';
import { PetsRepositories } from 'modules/pets/infra/repositories/PetsRepositories';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from 'modules/accounts/infra/repositories/UsersRepositories';

class DeleteMealUseCase {
  async execute({ id, user_id }): Promise<string> {
    const mealsRepositories = getCustomRepository(MealsRepositories);
    const petsRepositories = getCustomRepository(PetsRepositories);

    const meal = await mealsRepositories.findOne({id});

    if(meal) {
      console.log("entrou no meal");
      const pet = await petsRepositories.findOne({id: meal.pet_id});
      console.log(pet);

      if(pet) {
        if(pet.user_id != user_id) {
          throw new Error("Unauthorized");
        }
        
        await mealsRepositories.remove(meal);
        
      }
    }
    
    return "Meal is deleted";
  }
}

export { DeleteMealUseCase };