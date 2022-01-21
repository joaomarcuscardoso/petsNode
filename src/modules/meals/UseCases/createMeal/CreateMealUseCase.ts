import { IMealRequest } from "modules/meals/dtos/IMealRequest";
import { getCustomRepository } from 'typeorm';
import { MealsRepositories } from "modules/meals/infra/repositories/MealsRepositories";
import { PetsRepositories } from "modules/pets/infra/repositories/PetsRepositories";

class CreateMealUseCase {
  async execute({description, meal_time, pet_id}: IMealRequest) {
    const mealRepositories = getCustomRepository(MealsRepositories);
    const petRepositories = getCustomRepository(PetsRepositories);

    const pet = await petRepositories.findOne({id: pet_id});

    if(!pet) {
      throw new Error("Pet not found");
    }

    if(!description && !meal_time) {
      throw new Error("All inputs is required!");
    }

    const meal = mealRepositories.create({
      description,
      meal_time,
      pet_id
    });

    await mealRepositories.save(meal);

    return meal;
  }
}

export { CreateMealUseCase };